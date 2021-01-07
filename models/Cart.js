const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
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

module.exports = mongoose.model("Cart", CartSchema);
