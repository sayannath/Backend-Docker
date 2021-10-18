require("dotenv").config();

const express = require("express");
const app = express();

// Connect DB
require("./config/db");

const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

app.enable("trust proxy");

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/api/v1", (req, res) => {
  res.send("Backend up with Docker");
  console.log("Running!");
});

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
