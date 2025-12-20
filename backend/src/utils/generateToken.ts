import jwt, { type JwtPayload } from "jsonwebtoken"
import "dotenv/config"



export const generateToken = async (user_id: string) => {
    try {
        if(!user_id) throw Error("user_id is required");

        const token = jwt.sign({user_id}, process.env.JWT_SECRET!, {expiresIn: "15d"})
        
        return token   
    } catch (error) {
        console.error(error);
        throw Error((error as Error).message)
    }
}


