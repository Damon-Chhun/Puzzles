const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    data: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    },
    shop: {
      type: Array,
      deafult: []
    }
  },
  { timestamps: true }
);

module.exports = Transaction = mongoose.model("Transaction", CartSchema);
