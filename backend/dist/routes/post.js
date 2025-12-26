import * as express from "express";
import { protect } from "../middleware/protect.js";
import { create_post, delete_post, like_post, unlike_post } from "../controllers/post.js";
import { upload } from "../utils/upload.js";
const router = express.Router();
router.post("/create", protect, upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 10 }
]), create_post);
router.post("/like_post/:post_id", protect, like_post);
router.delete('/un_like_post/:post_id', protect, unlike_post);
router.delete("/delete/:post_id", protect, delete_post);
export default router;
//# sourceMappingURL=post.js.map