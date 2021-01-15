const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Cart = require("../../models/Cart");
const Posts = require("../../models/Posts");

const { check, validationResult } = require("express-validator");

//@route    Post api/shop/:Department/:productID
//@desc     Make a review
//@access   Private
router.post(
  "/:productID",
  auth,
  [
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user, "USER MODEL");
      const product = await Shop.findById(req.params.productID);
      console.log(product, "PRODUCT MODEL");

      const newPost = new Posts({
        text: req.body.text,
        user: req.user.id,
        name: user.name,
        avatar: user.avatar,
        productID: product.id
      });

      const post = await newPost.save();
      await Shop.findOneAndUpdate(
        { _id: product.id },
        { $push: { posts: newPost } }
      );

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  }
);

module.exports = router;
