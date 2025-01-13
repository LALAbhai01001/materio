const express = require("express");
const { postuser, loginuser } = require("../Controllers/UserController");

const UserRoutes = express.Router();

UserRoutes.post("/post-user", postuser);

UserRoutes.post("/login-user", loginuser);

module.exports = UserRoutes;
