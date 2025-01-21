const express = require("express");
const {loginuser, verifyOTP, reguser } = require("../Controllers/UserController");
const authMiddlerWare = require("../Middleware/authMiddleWare");

const UserRoutes = express.Router();

UserRoutes.post("/post-user", reguser);

UserRoutes.post("/login-user", loginuser);

UserRoutes.post("/verify-otp", authMiddlerWare , verifyOTP)

module.exports = UserRoutes;
