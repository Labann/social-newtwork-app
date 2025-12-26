import * as express from "express"
import { protect } from "../middleware/protect.js";
import { create_post } from "../controllers/post.js";
import { upload } from "../utils/upload.js";


const router = express.Router();

router.post(
    "/create", 
    protect, 
    upload.fields(
    [
        {name: "images", maxCount: 10}, 
        {name: "videos", maxCount: 10}
    ]),
    create_post
);


export default router;