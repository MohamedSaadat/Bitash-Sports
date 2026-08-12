// import express from "express";
// import fs from "fs";
// import path from "path";
// import cors from "cors";

// const app = express();
// app.use(cors());

// const userData = JSON.parse(fs.readFileSync("./src/data.json", "utf-8"));
// app.get("/api/overview", (req, res) => {
//   res.json(userData);
// });

// app.listen(3000, () => {
//   console.log("port 3000 is run");
// });

import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());

// تحديد المسار الديناميكي بحسب موقع ملف index.js
const dataPath = new URL("./data.json", import.meta.url); // أو "./src/data.json" حسب مكان index.js
const userData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

app.get("/api/overview", (req, res) => {
  res.json(userData);
});

// الاعتماد على بورت البيئة عند الرفع أونلاين
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});