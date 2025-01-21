const handler = require("express-async-handler");
const userModle = require("../Models/UserModel");
const JWT = require("jsonwebtoken");

const authMiddlerWare = handler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      let decode = JWT.verify(token, process.env.JSON_SECRET);
      // console.log(decode)
      req.user = await userModle.findById(decode.id);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid Token");
    }
  } else {
    res.status(401);
    throw new Error("Token not found");
  }
});

module.exports = authMiddlerWare;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODZjNmUwNDMwN2M4MmI1MGYyMmM3OSIsImlhdCI6MTczNjkyMjExOSwiZXhwIjoxNzM4MjE4MTE5fQ.FY3zvpbhhVHNu4yzb9-GoLtDHXdL6uiM_W9_XeNwQCo
