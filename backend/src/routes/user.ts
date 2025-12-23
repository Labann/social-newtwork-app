import * as express from "express"
import { protect } from "../middleware/protect.js";
import { delete_account, follow_user, getMe, getUserProfile, unfollow_user } from "../controllers/user.js";

const router = express.Router();


router.get("/me", protect, getMe)
router.get("/profile", protect, getUserProfile)
router.post("/follow/:user_id", protect, follow_user)
router.post("/unfollow/:user_id", protect, unfollow_user)
router.delete("/delete/:user_id", protect, delete_account)

export default router;