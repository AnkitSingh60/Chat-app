const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const checkProtectWithBearer  = asyncHandler(async (req, res, next) => {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        console.log('token:', token)
  
        //decodes token id
        const decoded = jwt.verify(token, "heyKiddo");
        console.log('decoded:', decoded)
  
        req.user = await User.findById(decoded.id).select("-password");
        console.log('user:', req.user)
  
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });
  
module.exports = {checkProtectWithBearer};