import Jwt from "jsonwebtoken";
import Dotenv from "dotenv";
import { User } from "../model/user.model.js";
Dotenv.config();

export const authenticate = (req, res, next) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.json({
        success: false,
        messege: "token missing",
      });
    }

    try {
      let payload = Jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      console.log(User);
      req.user = payload;
    } catch (error) {
      return res.json({
        success: false,
        messege: "token missing",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      messege: "auth problem",
    });
  }
};

export const isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(401).json({
        success: false,
        messege: "protected route for student",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      messege: "user role is not matching",
    });
  }
};

export const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(401).json({
        success: false,
        messege: "protected route for admin",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.json({
      success: false,
      messege: "user role is not matching",
    });
  }
};
