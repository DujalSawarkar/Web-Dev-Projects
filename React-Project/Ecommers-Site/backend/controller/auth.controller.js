import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    //fetch data
    const { name, email, password, role } = req.body;

    //check user is existing

    const userexist = await User.find({ email });

    if (!userexist) {
      return res.status(400).json({
        success: false,
        message: "user exist",
      });
    }
    //hashed pass
    let hashpass;
    try {
      hashpass = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "hashing fail",
      });
    }
    //created user
    const userDetail = await User.create({
      name,
      email,
      password: hashpass,
      role,
    });

    return res.status(200).json({
      success: true,
      message: "created signup",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "fail to regester",
    });
  }
};
