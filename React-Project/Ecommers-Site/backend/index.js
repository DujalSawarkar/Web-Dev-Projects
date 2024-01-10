import express from "express";
import { connectToDB } from "./config/database.js";
import dotenv from "dotenv";
import item from "./routes/item.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import user from "./routes/user.route.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/items", item);
app.use("/user", user);
const PORT = process.env.PORT || 4000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
});
