import express, { json } from "express";
import { env } from "./config/env.service.js";
import { databaseConnection } from "./database/connection.js";
import receiptRouter from "../module/receipt/receipt.controller.js";
import cors from "cors";

const app = express();
databaseConnection();
app.use(cors());
app.use(json());
app.use("/receipts", receiptRouter);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(env.port, () => {
  console.log(`Example app listening on port ${env.port}!`);
});
