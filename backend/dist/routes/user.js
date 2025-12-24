import * as express from "express";
import { protect } from "../middleware/protect.js";
import { delete_account, follow_user, getMe, getUserProfile, unfollow_user, update_proile } from "../controllers/user.js";
const router = express.Router();
router.get("/me", protect, getMe);
router.get("/profile/:id", protect, getUserProfile);
router.post("/follow/:user_id", protect, follow_user);
router.post("/unfollow/:user_id", protect, unfollow_user);
router.delete("/delete/:user_id", protect, delete_account);
router.patch("/profile/update/:user_id", protect, update_proile);
export default router;
//# sourceMappingURL=user.js.map