require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

app.post("/feedback", async (req, res) => {
  console.log("DATA RECEIVED:", req.body);
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.send("Saved ✅");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving data");
  }
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});