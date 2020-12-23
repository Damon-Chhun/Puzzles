const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Welcome, MongoDB Connected ... ^_^ ");
  } catch (error) {
    console.error(err.message);
    //Exit process with faiilure
    process.exit(1);
  }
};

module.exports = connectDB;
