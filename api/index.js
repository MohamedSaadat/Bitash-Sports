import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());

const filePath = path.join(process.cwd(), "src", "data.json");
const userData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

app.get("/api/overview", (req, res) => {
  res.json(userData);
});

if (!process.env.VERCEL) {
  app.listen(3000, () => {
    console.log("Backend running locally on http://localhost:3000");
  });
}

export default app;
