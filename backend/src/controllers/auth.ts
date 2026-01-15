import * as express from "express"
import { prisma } from "../lib/prisma.js"
import { generateToken } from "../utils/generateToken.js"
import "dotenv/config.js"
import bcrypt from "bcryptjs"
import type { User } from "../generated/prisma/client.js"
import { check_user } from "../utils/check_user.js"


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
            const isMatch =  await bcrypt.compare(password, user.password) 
            if(!isMatch) return res.status(400).json({
                error: "incorrect password"
            })
        }
        
        const token = await generateToken(user.id)

        res.cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production"
        })

        const safeUser = {...user, password: null}

        return res.status(200).json(safeUser)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: (error as Error).message})
    }
}


export const sign_up: express.RequestHandler = async (req, res) => {
    const {username, first_name, last_name, email, password} = req.body;
    try {
        if(!username || !first_name || !last_name || !email || !password) {
            return res.status(400).json({
              error: "bad request"
            })
        }

        const userExist = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(userExist) return res.status(400).json({
            error: "user already exist"
        })
        
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


export const redirectToHome: express.RequestHandler = async (req, res) => {
    try { 
        const user = req.user as User
        if(!user) return res.send(`
                <h1>User not found!</h1>
                <a href={${process.env.CLIENT_URL}/login}>Back to Login</a>
            `)
        const token = await generateToken(user.id)

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            secure: process.env.NODE_ENV === "production"
        })

        res.redirect(`${process.env.CLIENT_URL!}/home/?token=${token}`)
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


