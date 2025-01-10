const express = require("express");
const router = express.Router();
const validatePassword = require("../../../helpers/validatePassword");

router.get("/login", async (req, res, next) => {
  try {
    let { username, password } = req.body;

    if (!username || !password) {
      throw new Error("Either username or password are incorrect");
    }
    const user = await validatePassword(username, password);

    if (!user) {
      throw new Error("User not valid");
    }
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
