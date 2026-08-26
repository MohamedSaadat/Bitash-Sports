import express from "express";
import mysql from "mysql2";
const app = express();
app.use(express.json());

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
