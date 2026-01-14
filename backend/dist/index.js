import express from "express";
import { ENV } from "./config/index.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.js";
import cors from "cors";
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());
app.use(cors({
    origin: ["https://twitter-clone-28c6.vercel.app", "http://localhost:3000"]
}));
//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
const port = ENV.PORT || 4000;
app.listen(port, () => console.log(`server running on port: ${port}`));
app.get("/", (req, res) => res.send(`server runnning on port ${port}`));
//# sourceMappingURL=index.js.map