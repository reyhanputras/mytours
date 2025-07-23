import mongoose from "mongoose";
import { DATABASE } from "../config/env.js";

if (!DATABASE) {
  throw new Error("Please define DB URI");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE);
    console.log("Success connect to database ...");
  } catch (error) {
    console.log("Error connecting to database:", error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
