import User from "../models/userModel.js";
import bcryptjs from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const signup = async (req, res, next) => {
  const { username, email, password, repeat_password } = req.body;

  if (repeat_password != password) {
    res.status(203).json("Passwords do not match");
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  //   const newUser = new User({ username, email, password: hashedPassword });
  //   try {
  //     await newUser.save();
  //     res.status(201).json("User created successfully");
  //   } catch (error) {
  //     next(error);
  //   }
  // };
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  const user = await prisma.user.create({
    data: {
        email,
      username,
      password: hashedPassword,
    },
  });

  return res.json(user);
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await prisma.user.findUnique({
        where: { email },
      });
    
    if (!validUser)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return res
        .status(401)
        .json({ success: false, message: "Wrong email or password" });

    const token = jwt.sign({ id: validUser._id }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true, // Ensures the cookie is sent only over HTTP(S), not accessible via JavaScript
      })
      .status(200)
      .json({ success: true, ...rest });
  } catch (error) {
    next(error);
  }
};
