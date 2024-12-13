const express = require("express");
const { connectDB } = require("../config/database");
const User = require("../models/User");
const { model } = require("mongoose");
// require("../config/database")
const app = express();

app.use(express.json());

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });
    res.send(user)
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

app.post("/signup", async (req, res) => {
  console.log("Json Data ->", req.body);
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User created Successfully");
  } catch (err) {
    res.status(400).send("Error saving the user" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connection established!");
    app.listen(3000, () => {
      console.log("app is sucessfuly listening on server 3000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
