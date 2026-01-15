import * as express from "express";
import { login, logout, redirectToHome, sign_up } from "../controllers/auth.js";
import passport from "passport"

const router = express.Router();

router.post("/login", login)
router.get("/v2/login", passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false
}));             
router.get("/v2/login/callback", passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL!,
    session: false
}), redirectToHome)
router.post("/sign_up", sign_up)
router.post("/logout", logout)


export default router;

