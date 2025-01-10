const errorHandler = (err, req, res, next) => {
  console.error(err.message); // Log the error for debugging
  const status = err.status || 404; // Default status code is 404 if none is set
  res.status(status).json({ error: err.message });
};

module.exports = errorHandler;
