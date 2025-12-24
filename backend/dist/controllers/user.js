import * as express from "express";
import { prisma } from "../lib/prisma.js";
import { check_user } from "../utils/check_user.js";
import bcrypt from "bcryptjs";
export const getMe = async (req, res) => {
    try {
        const user = req.user;
        await check_user(user.id);
        const safeUser = { ...user, password: null };
        return res.status(200).json(safeUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const getUserProfile = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).json({
                error: "bad request id is required"
            });
        const user = await prisma.user.findUnique({
            where: {
                id: id
            },
            include: {
                followers: true,
                following: true,
            }
        });
        if (!user)
            return res.status(404).json({
                error: "user not found"
            });
        const safeUser = { ...user, password: null };
        return res.status(200).json(safeUser);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const follow_user = async (req, res) => {
    const { user_id } = req.params;
    try {
        if (!user_id)
            return res.status(400).json({
                error: "user id is required"
            });
        const current_user = req.user;
        await check_user(current_user.id);
        const other_user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        });
        if (!other_user)
            return res.status(404).json({
                error: "user account not found"
            });
        const is_follow_exist = await prisma.follow.findUnique({
            where: {
                follower_id_following_id: {
                    follower_id: current_user.id,
                    following_id: other_user.id
                }
            }
        });
        if (is_follow_exist)
            return res.status(400).json({
                error: "already followed user"
            });
        const create_follow = await prisma.follow.create({
            data: {
                following_id: other_user.id,
                follower_id: current_user.id
            }
        });
        return res.status(201).json({ message: "followed successfully", create_follow });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const unfollow_user = async (req, res) => {
    const { user_id } = req.params;
    try {
        if (!user_id)
            return res.status(400).json({
                error: 'user id is required'
            });
        const current_user = req.user;
        await check_user(current_user.id);
        const other_user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        });
        if (!other_user)
            return res.status(404).json({
                error: "account not found"
            });
        const follow_exist = await prisma.follow.findUnique({
            where: {
                follower_id_following_id: {
                    following_id: other_user.id,
                    follower_id: current_user.id
                }
            }
        });
        if (!follow_exist)
            return res.status(400).json({
                error: "bad request - account not in your following"
            });
        const delete_follow = await prisma.follow.delete({
            where: {
                follower_id_following_id: {
                    following_id: other_user.id,
                    follower_id: current_user.id
                }
            }
        });
        return res.status(200).json({
            delete_follow,
            message: "un-followed successfully"
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const delete_account = async (req, res) => {
    const { user_id } = req.params;
    try {
        if (!user_id)
            return res.status(400).json({
                error: "user id is required"
            });
        const is_my_account = user_id === req.user.id;
        if (!is_my_account)
            return res.status(401).json({
                error: "unauthorized -- can't delete account of another user"
            });
        await check_user(user_id);
        const delete_user = await prisma.user.delete({
            where: {
                id: user_id
            }
        });
        return res.status(200).json({ message: "account deleted successfully", delete_account });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const update_proile = async (req, res) => {
    const { username, last_name, first_name, email } = req.body;
    const { user_id } = req.params;
    try {
        if (!username && !last_name && !first_name && !email)
            return res.status(400).json({
                error: "bad request"
            });
        if (!user_id)
            return res.status(400).json({
                error: "user id is required"
            });
        const user = req.user;
        check_user(user.id);
        if (user_id !== req.user.id)
            return res.status(401).json({
                error: "can't update profile of other user"
            });
        const updated_user = await prisma.user.update({
            where: {
                id: user_id
            },
            data: {
                username: username ?? user.username,
                email: email ?? user.email,
                first_name: first_name ?? user.first_name,
                last_name: last_name ?? user.last_name,
            }
        });
        return res.status(200).json({
            message: "updated profile",
            updated_user
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const change_profile_pic = async (req, res) => {
    try {
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const change_password = async (req, res) => {
    const { prev_password, new_password } = req.body;
    const { user_id } = req.params;
    try {
        if (!prev_password || !new_password)
            return res.status(400).json({
                error: "bad request -  previous password and new password are required"
            });
        if (!user_id)
            return res.status(400).json({
                error: "user id is required"
            });
        const current_user = req.user;
        check_user(current_user.id);
        if (user_id !== current_user.id)
            return res.status(401).json({
                error: "cannot change password of another user"
            });
        const isMatch = await bcrypt.compare(prev_password, current_user.password);
        if (!isMatch)
            return res.status(400).json({
                error: "incorrect previous password"
            });
        const salt = await bcrypt.genSalt();
        const passwordHashed = await bcrypt.hash(new_password, salt);
        const new_user = await prisma.user.update({
            where: {
                id: user_id,
            },
            data: {
                password: passwordHashed
            }
        });
        const safe_user = { ...new_user, password: null };
        return res.status(200).json({ safe_user, message: "password changed" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=user.js.map