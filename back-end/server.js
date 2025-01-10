const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");
require("dotenv").config();
const errorHandler = require("./middleware/error/errorHandler");

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON bodies

//mount the mainRouter under a base path, for example "/api"
app.use(errorHandler);
app.use("/api", mainRouter);

// main route
app.get("/", async (req, res) => {
  res.status(200).json({ message: "default path" });
});

// start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
