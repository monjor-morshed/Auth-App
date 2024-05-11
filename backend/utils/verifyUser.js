import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(403, "You need to login first!"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(403, "Invalid Token"));
    }
    req.user = user;
    next();
  });
};
