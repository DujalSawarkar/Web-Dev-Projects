import express from "express";
import {
  findItem,
  findItemCategory,
  getItem,
  insertDoc,
} from "../controller/item.controller.js";
import { signup } from "../controller/auth.controller.js";

const item = express.Router();

item.get("/find/:categoryId", findItemCategory);
item.get("/", findItem);
item.post("/create", insertDoc);

item.get("/:itemtype", getItem);
// item.post("/login", login);
item.post("/signup", signup);
export default item;
