import { prisma } from "../lib/prisma.js";



export const check_user = async (user_id: string) => {

    if(!user_id) throw new Error("user id is required");
    const userExist = await prisma.user.findUnique({
        where: {
            id:  user_id
        }
    })

    if(!userExist) throw new Error("user not logged in");
}