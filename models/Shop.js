const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  },
  posts: {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    text: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    avatar: {
      type: String
    },
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users"
        }
      }
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users"
        },
        text: {
          type: String,
          required: true
        },
        avatar: {
          type: String
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  }
});

module.exports = Shop = mongoose.model("Shop", ShopSchema, "Shop");
