const bcrypt = require("bcrypt");

async function hashPassword(req, res, next) {
  try {
    if (!req.body.password) {
      throw new Error("Password is required"); // Throw an error
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    req.body.password = hashedPassword;
    next();
  } catch (error) {
    next(error); // Pass the error to the global error handler
  }
}

module.exports = hashPassword;
