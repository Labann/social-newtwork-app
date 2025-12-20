import express from "express";
import { ENV } from "./config/index.js";
import authRoutes from "./routes/auth.js";
const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
//routes
app.use("/api/auth", authRoutes);
const port = ENV.PORT || 4000;
app.listen(port, () => console.log(`server running on port: ${port}`));
app.get("/", (req, res) => res.send(`server runnning on port ${port}`));
//# sourceMappingURL=index.js.map