import * as express from "express";
import { login, logout, sign_up } from "../controllers/auth.js";


const router = express.Router();

router.post("/login", login)
router.post("/sign_up", sign_up)
router.post("/logout", logout)


export default router;

