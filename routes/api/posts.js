const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Cart = require("../../models/Cart");
const Posts = require("../../models/Posts");

const { check, validationResult } = require("express-validator");

//@route    Post api/posts/:productID
//@desc     Make a review
//@access   Private
router.post(
  "/:Department/:productID",
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
      await User.findOneAndUpdate(
        { _id: req.user.id },
        { $push: { posts: newPost } }
      );

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  }
);

//@route    GET api/posts/:productID
//@desc     Get all reviews for a product
//@access   Public

router.get("/:Department/:productID", async (req, res) => {
  try {
    console.log(req.params.productID);
    const product = await Shop.findById(req.params.productID);
    //console.log(product.posts);
    if (product.posts.length < 1) {
      res.status(404).json("No Reviews for this product yet");
    } else {
      console.log(product.posts, "REVIEWS FOR PRODUCT");
      res.json(product.posts);
    }
  } catch (error) {
    console.error(error.message);
    res.status(404).json("Server Error");
  }
});
//@route    GET api/posts/
//@desc     Get all reviews from a user
//@access   Private

router.get("/:userID", auth, async (req, res) => {
  try {
    console.log(req.params.userID);
    const user = await User.findById(req.params.userID);

    const reviews = user.posts;
    console.log(reviews);
    if (!reviews) {
      res.status(404).json({ msg: "Error finding post made by user" });
    }
    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    if (!reviews) {
      res.status(404).json({ msg: "Error finding post made by user" });
    }
    res.status(404).json("Server Error");
  }
});

module.exports = router;