import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

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

//login

export const Login = async (req, res) => {
  try {
    //fetch data
    const { email, password } = req.body;
    console.log(req.body);
    //valid or not
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please enter valid details",
      });
    }

    //uses registered or not

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not regester",
      });
    }

    //payload
    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
    };

    if (await bcrypt.compare(password, user.password)) {
      //create jwt token

      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user = user.toObject();
      user.token = token;
      user.password = undefined;
      const option = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, option).status(200).json({
        success: true,
        token,
        user,
        message: "logged in succesfully",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "password do not match",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "login failed",
    });
  }
};
