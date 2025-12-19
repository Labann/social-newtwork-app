import express from "express";
import { ENV } from "./config/index.js";
const app = express();
const port = ENV.PORT || 3030;
app.listen(port, () => console.log(`server running on port: ${port}`));
app.get("/", (req, res) => res.send(`server runnning on port ${port}`));
//# sourceMappingURL=index.js.map