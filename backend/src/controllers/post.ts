import * as express from "express"
import type { Multer } from "multer";
import type { User } from "../generated/prisma/client.js";
import { check_user } from "../utils/check_user.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { prisma } from "../lib/prisma.js";




export const create_post: express.RequestHandler = async (req, res) => {
    const {text} = req.body;
    
    try {
        const files = req.files as  {[fieldname: string]: Express.Multer.File[]}      
        
        const {images: ImageFiles = [], videos: VideoFiles = []} = files
        
        if(text && ImageFiles.length === 0 && VideoFiles.length === 0) return res.status(400).json({
            error: "text or images or videos are required in the post"
        })

        const user_posting = req.user as User

        await check_user(user_posting.id);
        let images_secure_url
        let videos_secure_url
        if(ImageFiles.length !== 0){
            images_secure_url = await Promise.all(ImageFiles.map(async file => {
                const results = await uploadToCloudinary(file.buffer)
                const secure_url = results.secure_url;
                return secure_url;
            }))
        }

        if(VideoFiles.length !== 0) {
            videos_secure_url = await Promise.all(ImageFiles.map(async file => {
                const results = await uploadToCloudinary(file.buffer)
                const secure_url = results.secure_url;
                return secure_url;
            }))
        }
        
        const new_post = await prisma.post.create({
            data: {
                user_id: user_posting.id,
                text: text ?? null,
                images: images_secure_url || [],
                videos: videos_secure_url || []
            }
        })
        

        return  res.status(201).json({
            message: "post created",
            post: new_post
        })
       
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            error: (error as Error).message
        })
    }
}