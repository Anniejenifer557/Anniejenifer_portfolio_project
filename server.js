const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 500

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});