import mongoose from "mongoose";
import { env } from "../config/env.service.js";
import dns from "node:dns/promises";
console.log(dns.getServers());
export const databaseConnection = async () => {
  try {
    console.log(dns.getServers());
    dns.setServers(["1.1.1.1"]);

    console.log(env.databaseURI);
    const data = await mongoose.connect(env.databaseURI);

    console.log("ok");
  } catch (err) {
    console.log("not ok");
    console.log(err);
  }
};
