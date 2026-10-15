import { Router } from "express";
import {
  createReceipt,
  getAllReceipts,
  getReceiptById,
} from "./receipt.serves.js";

const receiptRouter = Router();

receiptRouter.post("/createReceipt", async (req, res) => {
  let data = await createReceipt(req.body);
  res.json(data);
});

receiptRouter.get("/getAllReceipts", async (req, res) => {
  let data = await getAllReceipts();
  res.json(data);
});

receiptRouter.get("/getReceiptById/:userId", async (req, res) => {
  let data = await getReceiptById(req.params.userId);
  res.json(data);
});

// receiptRouter.put("/update-user", async (req, res) => {
//   let data = await updateUser(req.body, req.query);
//   res.json(data);
// });

// receiptRouter.delete("/delete-user/:id", async (req, res) => {
//   let data = await deleteReceipt(req.params.id);
//   res.json(data);
// });

export default receiptRouter;
