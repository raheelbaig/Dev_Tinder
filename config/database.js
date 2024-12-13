const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://devTinder:devTinder8911@devtinder.fettm.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
