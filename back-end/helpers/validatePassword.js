const bcrypt = require("bcrypt");
const pool = require("../database/db_connection");

async function validatePassword(username, password) {
  try {
    const query = "SELECT * FROM users WHERE username = $1";
    const values = [username];

    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      throw new Error("Invalid username or password");
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("Invalid username or password");
    }

    // Attach user info to req object (optional)
    let userObj = { id: user.id, username: user.username };
    return userObj;
  } catch (error) {
    throw error;
  }
}

module.exports = validatePassword;
