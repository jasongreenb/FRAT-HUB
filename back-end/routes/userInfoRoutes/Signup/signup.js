const express = require("express");
const router = express.Router();
const pool = require("../../../database/db_connection");
const hashPassword = require("../../../middleware/auth/encryptPass");

router.post("/signup", hashPassword, async (req, res, next) => {
  try {
    let { username, password } = req.body;
    // Insert into the users table
    // Assuming your users table has columns: id (SERIAL), username (VARCHAR), password (VARCHAR)
    const text = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
    const values = [username, password]; // or [username, hashedPassword] if you hashed

    const result = await pool.query(text, values);

    const newUser = result.rows[0];
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
