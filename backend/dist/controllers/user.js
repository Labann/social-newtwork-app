import * as express from "express";
import { prisma } from "../lib/prisma.js";
import { check_user } from "../utils/check_user.js";
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
        await check_user(user_id);
        const is_my_account = user_id === req.user.id;
        if (!is_my_account)
            return res.status(401).json({
                error: "unauthorized -- can't delete account of another user"
            });
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
//# sourceMappingURL=user.js.map