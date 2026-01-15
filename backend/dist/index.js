import express from "express";
import { ENV } from "./config/index.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.js";
import cors from "cors";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { prisma } from "./lib/prisma.js";
import splitName from "./utils/splitName.js";
import "dotenv/config";
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://twitter-clone-28c6.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));
//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
const port = ENV.PORT || 4000;
//Google oauth
passport.use(new GoogleStrategy({
    clientID: `${process.env.CLIENT_ID}`,
    clientSecret: `${process.env.CLIENT_SECRET}`,
    callbackURL: `${process.env.SERVER_URL}/api/auth/v2/login/callback`
}, async (accessToken, refreshToken, profile, done) => {
    const email = profile.emails?.[0]?.value;
    if (!email) {
        return done(new Error("email not available"));
    }
    let user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    const name = splitName(profile.displayName);
    if (!user) {
        //sign-up
        user = await prisma.user.create({
            data: {
                email: email,
                first_name: name.first_name,
                last_name: name.last_name,
                username: profile.username || profile.displayName
            }
        });
    }
    //login
    done(null, user);
}));
app.listen(port, () => console.log(`server running on port: ${port}`));
app.get("/", (req, res) => res.send(`server runnning on port ${port}`));
//# sourceMappingURL=index.js.map