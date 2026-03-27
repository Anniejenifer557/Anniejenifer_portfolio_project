const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


mongoose.connect("mongodb+srv://anniejenifer0507_db_user:Anniejenifer557>@cluster0.xs8flvx.mongodb.net/portfolioDB?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));
const app = express();


app.use(cors());
app.use(express.json());const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// ✅ POST ROUTE
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