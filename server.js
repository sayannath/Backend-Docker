require("dotenv").config();

const express = require("express");
const app = express();

require("./config/db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Import Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", todoRoutes);

app.get("/", (req, res) => {
  res.send("Backend up with Docker");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
