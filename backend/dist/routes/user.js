import * as express from "express";
import { protect } from "../middleware/protect.js";
import { change_banner_img, change_password, change_profile_pic, delete_account, follow_user, getMe, getUserProfile, unfollow_user, update_proile } from "../controllers/user.js";
import { upload } from "../utils/upload.js";
const router = express.Router();
router.get("/me", protect, getMe);
router.get("/profile/:id", protect, getUserProfile);
router.post("/follow/:user_id", protect, follow_user);
router.post("/unfollow/:user_id", protect, unfollow_user);
router.delete("/delete/:user_id", protect, delete_account);
router.patch("/profile/update/:user_id", protect, update_proile);
router.patch("/change_password/:user_id", protect, change_password);
router.patch("/change_profilePic/:user_id", protect, upload.single("profilePic"), change_profile_pic);
router.patch("/change_banner_img/:user_id", protect, upload.single("bannerImg"), change_banner_img);
export default router;
//# sourceMappingURL=user.js.map