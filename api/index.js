import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import mysql from "mysql2";
const app = express();
app.use(cors(), express.json());

// const filePath = path.join(process.cwd(), "src", "data.json");
// const userData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
app.get("/api/overview", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bitashdata",
  });
  connection.execute("SELECT * FROM `users`", (err, result) => {
    console.log("🚀 ~ result:", result);
    res.json({ DATA: result });
  });
});

if (!process.env.VERCEL) {
  app.listen(3000, () => {
    console.log("Backend running locally on http://localhost:3000");
  });
}

export default app;
