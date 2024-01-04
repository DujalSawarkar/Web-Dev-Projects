import express from "express";
import {
  findItem,
  findItemCategory,
  getItem,
  insertDoc,
} from "../controller/item.controller.js";

const item = express.Router();

item.get("/find/:categoryId", findItemCategory);
item.get("/", findItem);
item.post("/create", insertDoc);

item.get("/:itemtype", getItem);

export default item;
