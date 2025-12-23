import { prisma } from "../lib/prisma.js";
export const check_user = async (user_id) => {
    if (!user_id)
        throw Error("user id is required");
    const userExist = await prisma.user.findUnique({
        where: {
            id: user_id
        }
    });
    if (!userExist)
        throw Error("user not logged in");
};
//# sourceMappingURL=check_user.js.map