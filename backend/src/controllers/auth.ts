import * as express from "express"
import { prisma } from "../lib/prisma.js"
import { generateToken } from "../utils/generateToken.js"
import type { User } from "../src/generated/prisma/browser.js"
import bcrypt from "bcryptjs"

export const login: express.RequestHandler = async (req, res) => {
    const {email, password}: {
        email: string, password: string
    } = req.body
    try {
        if(!email || !password) return res.status(400).json({
            error: "email and password are required"
        })

        const user = await prisma.user.findUnique({
            where: {email: email}
        })

        if(!user) return res.status(400).json({
            error: "user does not exit"
        })

        if(user.password){
            const isMatch =  bcrypt.compare(password, user.password) 
            if(!isMatch) return res.status(400).json({
                error: "incorrect password"
            })
        }
        
        const token = await generateToken(user.id)

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none"
        })

        const safeUser = {...user, password: null}

        return res.status(200).json(safeUser)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: (error as Error).message})
    }
}


export const sign_up: express.RequestHandler = async (req, res) => {
    const {username, first_name, last_name, email, password}: User = req.body;
    try {
        if(!username || !first_name || !last_name || !email || !password) {
            return res.status(400).json({
              error: "bad request"
            })
        }

        
        const salt = await bcrypt.genSalt();
        const passwordHashed = await  bcrypt.hash(password, salt)
        const newUser = await prisma.user.create({
            data: {
                username,
                first_name,
                last_name,
                email,
                password: passwordHashed
            }
        })

        const safeUser = {...newUser, password: null}

        return res.status(201).json(safeUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


export const logout: express.RequestHandler = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({message: "logout successfully"})        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}


