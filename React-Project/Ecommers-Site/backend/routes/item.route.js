import express from "express";
import {
  findItem,
  findItemCategory,
  getItem,
  insertDoc,
} from "../controller/item.controller.js";
import { Login, signup } from "../controller/auth.controller.js";
import { auth, isStudent, isAdmin } from "../middleware/authmiddle.js";
const item = express.Router();

item.get("/find/:categoryId", findItemCategory);
item.get("/", findItem);
item.post("/create", insertDoc);

item.get("/:itemtype", getItem);
item.post("/login", Login);
item.post("/signup", signup);

//protected route
item.get("/test ", auth, (req, res) => {
  res.json({
    success: true,
    message: "welcome to test",
  });
});
item.get("/student ", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "welcome to student",
  });
});
item.get("/admin ", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "welcome to admi ",
  });
});
export default item;
