import jwt from "jsonwebtoken";
import express from "express";
import { prisma } from "../lib/prisma.js";
export const protect = async (req, res, next) => {
    try {
        let token;
        const authHeaders = req.headers.authorization;
        if (authHeaders && authHeaders.includes("Bearer ")) {
            token = authHeaders.split(" ")[1];
        }
        else if (req.cookies?.token) {
            token = req.cookies.token;
        }
        if (!token)
            return res.status(401).json({
                error: "unauthorized no token"
            });
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.user_id
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