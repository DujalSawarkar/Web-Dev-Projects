import express from "express";
import { connectToDB } from "./config/database.js";
import dotenv from "dotenv";
import item from "./routes/item.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/items", item);
const PORT = process.env.PORT || 3000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
});
