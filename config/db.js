const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    console.log("connecting to mongo...");
    await mongoose.connect(db, {
      useNewUrlParser: true,

      useUnifiedTopology: true
    });
    console.log(" ^_^ Welcome, MongoDB Connected ... ");
  } catch (error) {
    console.log(err.message);
    console.log("mongoDB failed to connect");
    //Exit process with faiilure
    process.exit(1);
  }
};

module.exports = connectDB;
