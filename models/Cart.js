const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "User"
  },
  products: [
    {
      productID: String,
      quantity: Number,
      name: String,
      price: Number
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
