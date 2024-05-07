import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import e from "express";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "Signup success!",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const isMatch = bcryptjs.compareSync(password, validUser.password);
    if (!isMatch) {
      return next(errorHandler(401, "Invalid credentials"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expirationDate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: expirationDate,
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
