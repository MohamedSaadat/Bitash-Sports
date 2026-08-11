import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(cors());

const userData = JSON.parse(fs.readFileSync("./src/data.json", "utf-8"));
app.get("/api/overview", (req, res) => {
  res.json(userData);
});

app.listen(3000, () => {
  console.log("port 3000 is run");
});
