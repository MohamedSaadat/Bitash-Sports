import mongoose from "mongoose";
import { env } from "../config/env.service.js";
import dns from "node:dns/promises";
console.log(await dns.getServers());
// [ '127.0.0.53' ]
export const databaseConnection = async () => {
  try{
    console.log(await dns.getServers());
  dns.setServers(["1.1.1.1"]);

    console.log(env.databaseURI)
 const data =await mongoose.connect(env.databaseURI)
  
      console.log("ok");
    }
  catch(err)  {
      console.log("not ok");
      console.log(err);
    }
};
