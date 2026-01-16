import jwt from "jsonwebtoken";
import express from "express";
import { prisma } from "../lib/prisma.js";
export const protect = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;
        if (!token)
            return res.status(401).json({
                error: "unauthorized no token"
            });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.user_id
            },
            include: {
                followers: true,
                following: true,
                saved_posts: true
            }
        });
        if (!user)
            return res.status(401).json({
                error: "unauthorized invalid token"
            });
        req.user = user;
        next();
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            error: error.message
        });
    }
};
//# sourceMappingURL=protect.js.map