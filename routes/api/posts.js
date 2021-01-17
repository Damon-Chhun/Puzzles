const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const User = require("../../models/User");
const Shop = require("../../models/Shop");
const Posts = require("../../models/Posts");

const { check, validationResult } = require("express-validator");

//@route    Post api/posts/:productID
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
    const review = await Posts.find({ productID: req.params.productID });

    console.log(review);

    //check if there arent any reviews
    if (review.length == 0) {
      return res.status(404).json({ msg: `They're no reviews for this item` });
    } else {
      res.json(review);
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

    if (user === null) {
      res.status(404).json({ msg: "Error finding post made by user" });
    }

    const reviews = await Posts.find({ user: req.params.userID });
    console.log(reviews);
    if (!reviews) {
      res.status(404).json({ msg: "Error finding post made by user" });
    }
    res.json(reviews);
  } catch (error) {
    console.error(error.message);
    if (!reviews || user === null) {
      res.status(404).json({ msg: "Error finding post made by user" });
    }
    res.status(404).json("Server Error");
  }
});

//@route    DELETE api/posts/:postID
//@desc     DELETE review
//@access   Private

router.delete("/:postID", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postID);
    console.log(post);

    //check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT api/posts/like/postID
//@desc     Like a post
//@access   Private

router.put("/like/:postID", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postID);

    //Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Post is already liked" });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    PUT api/posts/unlike/postID
//@desc     unlike a post
//@access   Private

router.put("/unlike/:postID", auth, async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postID);

    //Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Post is not liked yet" });
    }

    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    Post api/posts/:postID
//@desc     Make a review
//@access   Private
router.post(
  "/comment/:postID",
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

      const post = await Posts.findById(req.params.postID);

      const newComment = {
        text: req.body.text,
        user: req.user.id,
        name: user.name,
        avatar: user.avatar
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  }
);

module.exports = router;
