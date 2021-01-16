const mongoose = require("mongoose");
const Shop = require("./Shop");
const Posts = require("./Posts");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  purchaseHistory: {
    type: [Shop.Schema],
    default: []
  }
});

module.exports = User = mongoose.model("User", UserSchema, "users");
