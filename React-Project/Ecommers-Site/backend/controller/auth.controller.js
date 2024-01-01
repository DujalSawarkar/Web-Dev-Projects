import { user } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    //fetch data
    const { name, email, password, role } = req.body;

    //check user is existing

    const userexist = await user.find({ email });

    if (!userexist) {
      return res.status(400).json({
        success: false,
        message: "user exist",
      });
    }
  } catch (error) {}
};
