import express from "express"
import { ENV } from "./config/index.js";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({extended: true, limit: "30mb"}));
app.use(cookieParser())
//routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes)

const port = ENV.PORT || 4000

app.listen(port, () => console.log(`server running on port: ${port}`));

app.get("/", (req, res) => res.send(`server runnning on port ${port}`));
  



