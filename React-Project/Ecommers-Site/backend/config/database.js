import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectToDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
      console.log("connected to database");
    });
  } catch (e) {
    console.log(e);
  }
};
