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
    boolean,
    deafult: true
  },
  lastModified: {
    type: Data,
    deafult: Date.now
  }
});

module.exports = mongoose.model("Cart", CartSchema);
