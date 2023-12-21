import express from "express";
import { findItem, getItem } from "../controller/item.controller.js";

const item = express.Router();

item.get("/", findItem);
item.post("/", getItem);


export default item;
