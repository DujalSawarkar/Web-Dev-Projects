import express from "express";

import { Login, signup } from "../controller/auth.controller.js";
import { authenticate, isStudent, isAdmin } from "../middleware/authmiddle.js";

const user = express.Router();

user.post("/login", Login);
user.post("/signup", signup);
user.get("/", authenticate, isAdmin, (req, res) => {
  res.json({ msg: "inside get" });
});

export default user;
