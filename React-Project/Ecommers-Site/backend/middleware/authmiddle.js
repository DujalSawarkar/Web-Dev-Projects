import Jwt from "jsonwebtoken";

import Dotenv from "dotenv";
Dotenv.config();

export const auth = (req, res, next) => {
  try {
    const token = req.body.token;

    if (!token) {
      return res.json({
        success: false,
        messege: "token missing",
      });
    }

    try {
      const payload = Jwt.verify(token, process.env.JWT_SECRETE);
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
    }
  } catch (error) {
    return res.json({
      success: false,
      messege: "user role is not matching",
    });
  }
};
