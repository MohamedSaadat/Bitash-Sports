import { Router } from "express";
import { createNewUser, getAllUsers } from "./allUsers.service.js";

const userRouter = Router();

userRouter.post("/createNewUser", async (req, res) => {
  let data = await createNewUser(req.body);
  res.json(data);
});

userRouter.get("/getAllUsers", async (req, res) => {
  let data = await getAllUsers();
  res.json(data);
});

export default userRouter;