const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Authentication API is running"
  });
});

app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

app.use((err, req, res, next) => {
  console.error(err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: Object.values(err.errors)
        .map((error) => error.message)
        .join(", ")
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      message: "User already exists with this email"
    });
  }

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error"
  });
});

module.exports = app;
