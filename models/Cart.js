const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "User"
  },
  products: [
    {
      productID: String,
      title: String,
      department: String,
      quantity: Number,
      name: String,
      price: Number,
      imageURL: String
    }
  ],
  active: {
    type: Boolean,
    default: true
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cart = mongoose.model("Cart", CartSchema, "carts");
