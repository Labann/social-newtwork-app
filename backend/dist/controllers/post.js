import * as express from "express";
import { check_user } from "../utils/check_user.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { prisma } from "../lib/prisma.js";
import { buildCommentTree } from "../utils/getCommentsRecursively.js";
export const create_post = async (req, res) => {
    const { text } = req.body;
    try {
        const files = req.files;
        const { images: ImageFiles = [], videos: VideoFiles = [] } = files;
        if (!text && ImageFiles.length === 0 && VideoFiles.length === 0)
            return res.status(400).json({
                error: "text or images or videos are required in the post"
            });
        const user_posting = req.user;
        await check_user(user_posting.id);
        let images_secure_url;
        let videos_secure_url;
        if (ImageFiles.length !== 0) {
            images_secure_url = await Promise.all(ImageFiles.map(async (file) => {
                const results = await uploadToCloudinary(file.buffer);
                const secure_url = results.secure_url;
                return secure_url;
            }));
        }
        if (VideoFiles.length !== 0) {
            videos_secure_url = await Promise.all(VideoFiles.map(async (file) => {
                const results = await uploadToCloudinary(file.buffer);
                const secure_url = results.secure_url;
                return secure_url;
            }));
        }
        const new_post = await prisma.post.create({
            data: {
                user_id: user_posting.id,
                text: text ?? null,
                images: images_secure_url || [],
                videos: videos_secure_url || []
            },
            include: {
                author: true,
                comments: true,
                likes: true,
            }
        });
        return res.status(201).json({
            message: "post created",
            post: new_post
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const like_post = async (req, res) => {
    const { post_id } = req.params;
    try {
        if (!post_id)
            return res.status(400).json({
                error: "post id is required"
            });
        const post = await prisma.post.findUnique({
            where: {
                id: post_id
            }
        });
        if (!post)
            return res.status(404).json({
                error: "post not found"
            });
        const user = await req.user;
        await check_user(user.id);
        const likeExists = await prisma.post_like.findUnique({
            where: {
                user_id_post_id: {
                    user_id: user.id,
                    post_id: post.id
                }
            }
        });
        if (likeExists)
            return res.status(400).json({
                error: "already liked post"
            });
        const post_like = await prisma.post_like.create({
            data: {
                post_id: post.id,
                user_id: user.id
            },
            include: {
                the_liker: true,
                the_post_liked: true,
            }
        });
        return res.status(201).json({
            message: "liked post",
            post_like
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const unlike_post = async (req, res) => {
    const { post_id } = req.params;
    try {
        if (!post_id)
            return res.status(400).json({
                error: "post id is required"
            });
        const postExists = await prisma.post.findUnique({
            where: {
                id: post_id
            }
        });
        if (!postExists)
            return res.status(404).json({
                error: "post does not exist"
            });
        const user = req.user;
        await check_user(user.id);
        const post_like_exists = await prisma.post_like.findUnique({
            where: {
                user_id_post_id: {
                    user_id: user.id,
                    post_id: postExists.id
                }
            }
        });
        if (!post_like_exists)
            return res.status(400).json({
                error: "can't unlike a post you have not liked"
            });
        const remove_like = await prisma.post_like.delete({
            where: {
                user_id_post_id: {
                    user_id: user.id,
                    post_id: postExists.id
                }
            },
            include: {
                the_liker: true,
                the_post_liked: true
            }
        });
        return res.status(200).json({
            message: "post unliked",
            post_like: remove_like
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const comment_on_post = async (req, res) => {
    const { post_id } = req.params;
    const { text } = req.body;
    const image = req.file;
    try {
        if (!post_id)
            return res.status(400).json({
                error: "post id required"
            });
        if (!text && !image)
            return res.status(400).json({
                error: "text or image is required"
            });
        let secure_url;
        if (image) {
            const results = await uploadToCloudinary(image.buffer);
            secure_url = results.secure_url;
        }
        const post = await prisma.post.findUnique({
            where: {
                id: post_id
            }
        });
        if (!post)
            return res.status(404).json({
                error: "post not found"
            });
        const user = req.user;
        await check_user(user.id);
        const create_comment = await prisma.comment.create({
            data: {
                user_id: user.id,
                post_id: post_id,
                text: text ?? null,
                image: secure_url ?? null
            },
            include: {
                the_post: true,
                author: true,
                likes: true,
                replies: true
            }
        });
        return res.status(201).json({
            message: "commented on post",
            comment: create_comment
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const get_post = async (req, res) => {
    const { post_id } = req.params;
    try {
        if (!post_id)
            return res.status(400).json({
                error: "post id is required"
            });
        const post = await prisma.post.findUnique({
            where: {
                id: post_id
            },
            include: {
                author: true,
                likes: true,
                comments: {
                    include: {
                        author: true
                    }
                },
            }
        });
        if (!post)
            return res.status(404).json({
                error: "post not found"
            });
        const comments = buildCommentTree(post.comments);
        return res.status(200).json({ ...post, comments });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const get_posts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                likes: true,
                comments: {
                    include: {
                        author: true
                    }
                },
                author: true,
            }
        });
        const posts_with_comments = posts.map(post => ({
            ...post,
            comments: buildCommentTree(post.comments)
        }));
        return res.status(200).json({ posts: posts_with_comments });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const reply_on_comment = async (req, res) => {
    const { post_id, parent_id } = req.params;
    const { text } = req.body;
    try {
        if (!post_id || !parent_id)
            return res.status(400).json({
                error: "post id and parant id are required"
            });
        const image = req.file;
        if (!text && !image)
            return res.status(400).json({
                error: "text or image is required"
            });
        const user = req.user;
        await check_user(user.id);
        const post = await prisma.post.findUnique({
            where: {
                id: post_id
            }
        });
        if (!post)
            return res.status(404).json({
                error: "post not found"
            });
        const commentExist = await prisma.comment.findUnique({
            where: {
                id: parent_id,
            }
        });
        if (!commentExist)
            return res.status(404).json({
                error: "parent comment does not exist"
            });
        let secure_url;
        if (image) {
            const results = await uploadToCloudinary(image.buffer);
            secure_url = results.secure_url;
        }
        const reply = await prisma.comment.create({
            data: {
                post_id: post_id,
                parent_id: parent_id,
                text: text ?? null,
                image: secure_url ?? null,
                user_id: user.id
            },
            include: {
                author: true,
                likes: true,
                replies: true,
            }
        });
        return res.status(200).json({
            message: "replied on comment",
            reply
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const delete_comment = async (req, res) => {
    const { comment_id } = req.params;
    try {
        if (!comment_id)
            return res.status(400).json({
                error: "comment id is required"
            });
        const comment = await prisma.comment.findUnique({
            where: {
                id: comment_id
            }
        });
        if (!comment)
            return res.status(404).json({
                error: "comment not found"
            });
        const deleted_comment = await prisma.comment.delete({
            where: {
                id: comment_id
            }
        });
        return res.status(200).json({
            message: "deleted comment successfully",
            comment: deleted_comment
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
export const delete_post = async (req, res) => {
    const { post_id } = req.params;
    try {
        if (!post_id)
            return res.status(400).json({
                error: "post id not found"
            });
        const post = await prisma.post.findUnique({
            where: {
                id: post_id
            }
        });
        if (!post)
            return res.status(404).json({
                error: "post not found"
            });
        const deleted_post = await prisma.post.delete({
            where: {
                id: post_id
            }
        });
        return res.status(200).json({
            message: "post deleted successfully",
            post: deleted_post
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=post.js.map