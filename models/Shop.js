const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Posts = require("./Posts");

const ShopSchema = new mongoose.Schema({
  Department: {
    type: String
  },

  title: {
    type: String
  },
  imageURL: {
    type: String
  },
  description: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quia, non repellat vel praesentium itaque omnis animi earum quam perspiciatis minima ipsum et quibusdam asperiores nostrum labore autem! Explicabo, in."
  },
  price: {
    type: Number
  }
});

module.exports = Shop = mongoose.model("Shop", ShopSchema, "shop");
