import type { Multer } from "multer";
import type { User } from "../src/generated/prisma/client.ts";

declare global {
    namespace Express{
        interface Request{
            user?: User,
            file?: Multer.File,
            files?: Multer.File[] | Multer.File[] | { [fieldname: string]: Multer.File[] };
        }
    }
}