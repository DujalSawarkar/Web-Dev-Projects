import express from "express";
import { findItem, getItem, insertDoc } from "../controller/item.controller.js";

const item = express.Router();

item.get("/find", findItem);
item.post("/", getItem);
item.post("/create", insertDoc);

export default item;



