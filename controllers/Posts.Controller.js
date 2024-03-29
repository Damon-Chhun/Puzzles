const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Shop = require("../models/Shop");
const Posts = require("../models/Posts");

module.exports = {
  postReview: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user, "USER MODEL");

      console.log(req.params.productID, "PRODUCTID");

      const product = await Shop.findById(req.params.productID);
      console.log(product, "PRODUCT MODEL");

      console.log(user.firstName, user.lastName);

      const name = user.firstName + " " + user.lastName;

      const newPost = new Posts({
        text: req.body.text,
        user: req.user.id,
        name,
        avatar: user.avatar,
        productID: product.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.log(err.message);
      res.status(500).json("Server Error");
    }
  },
  getProductReviews: async (req, res) => {
    try {
      console.log(req.params.productID);
      const review = await Posts.find({ productID: req.params.productID });

      console.log(review);

      //check if there arent any reviews
      if (review.length == 0) {
        return res.json([{ text: `They're no reviews for this item` }]);
      }
      res.json(review);
    } catch (error) {
      console.log(error.message);
      res.status(404).json("Server Error");
    }
  },
  deleteReview: async (req, res) => {
    try {
      const post = await Posts.findById(req.params.postID);
      console.log(post);

      //check user
      if (post.user.toString() !== req.user.id) {
        return res
          .status(401)
          .json({ errors: [{ msg: "User not authorized" }] });
      }

      await post.remove();

      res.json({ msg: "Post removed" });
    } catch (error) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  },
  like: async (req, res) => {
    try {
      console.log(req.params.postID);
      let post = await Posts.find({ _id: req.params.postID });
      post = post[0];
      console.log(post);

      //Check if the post has already been liked
      if (
        post.likes.filter((like) => like.user.toString() === req.user.id)
          .length > 0
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Post is already liked" }] });
      }

      post.likes.unshift({ user: req.user.id });

      await post.save();

      res.json(post.likes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  },
  unlike: async (req, res) => {
    try {
      let post = await Posts.find({ _id: req.params.postID });
      post = post[0];

      //Check if the post has already been liked
      if (
        post.likes.filter((like) => like.user.toString() === req.user.id)
          .length === 0
      ) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Post is not liked yet" }] });
      }

      const removeIndex = post.likes
        .map((like) => like.user.toString())
        .indexOf(req.user.id);

      post.likes.splice(removeIndex, 1);

      await post.save();

      res.json(post.likes);
    } catch (error) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  },
  comment: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user, "USER MODEL");

      const post = await Posts.findById(req.params.postID);

      const name = user.firstName + " " + user.lastName;

      const newComment = {
        text: req.body.text,
        user: req.user.id,
        name,
        avatar: user.avatar,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.log(err.message);
      res.status(500).json("Server Error");
    }
  },
  deleteComment: async (req, res) => {
    try {
      const post = await Posts.findById(req.params.postID);

      //pull out comment
      const comment = post.comments.find(
        (comment) => comment.id.toString() === req.params.commentID
      );

      //check if comment exists
      if (!comment) {
        return res
          .status(404)
          .json({ errors: [{ msg: "comment doesn't exist" }] });
      }

      //check user
      if (comment.user.toString() !== req.user.id) {
        return res
          .status(404)
          .json({ errors: [{ msg: "User is Not Authorized" }] });
      }

      //Get remove index
      const removeIndex = post.comments
        .map((comment) => comment.user.toString())
        .indexOf(req.user.id);

      post.comments.splice(removeIndex, 1);

      await post.save();

      res.json(post);
    } catch (error) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  },
  getSingleReview: async (req, res) => {
    try {
      console.log("getsingleReview");
      console.log(req.params.postID);
      const review = await Posts.findById(req.params.postID);

      console.log(review);

      //check if there arent any reviews
      if (review.length == 0) {
        return res.json([{ text: `They're no reviews for this item` }]);
      }
      res.json(review);
    } catch (error) {
      console.log(error.message);
      res.status(404).json("Server Error");
    }
  },
};
