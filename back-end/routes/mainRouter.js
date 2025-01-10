const express = require("express");
const mainRouter = express.Router();

const signupRouter = require("../routes/userInfoRoutes/Signup/signup");
const loginRouter = require("../routes/userInfoRoutes/Login/login");

mainRouter.use("/users", signupRouter);
mainRouter.use("/users", loginRouter);

module.exports = mainRouter;
