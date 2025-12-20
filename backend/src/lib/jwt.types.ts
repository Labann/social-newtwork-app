import type { JwtPayload } from "jsonwebtoken"


export interface My_jwt  extends JwtPayload {
    user_id: string
}


