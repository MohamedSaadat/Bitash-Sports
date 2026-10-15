import mongoose from "mongoose";
import { env } from "../config/env.service.js";

export const databaseConnection = () => {
  mongoose
    .connect(env.databaseURI)
    .then(() => {
      console.log("ok");
    })
    .catch((err) => {
      console.log(err);
    });
};
