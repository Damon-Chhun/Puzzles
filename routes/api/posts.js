const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const { check, validationResult } = require("express-validator");

const PostsController = require("../../controllers/Posts.Controller");

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
  PostsController.postReview
);

//@route    GET api/posts/:productID
//@desc     Get all reviews for a product
//@access   Public

router.get("/:Department/:productID", PostsController.getProductReviews);

//@route    GET api/posts/
//@desc     Get all reviews from a user
//@access   Private

router.get("/:userID", auth, PostsController.getUsersReviews);

//@route    DELETE api/posts/:postID
//@desc     DELETE review
//@access   Private

router.delete("/:postID", auth, PostsController.deleteReview);

//@route    PUT api/posts/like/postID
//@desc     Like a post
//@access   Private

router.put("/like/:postID", auth, PostsController.like);

//@route    PUT api/posts/unlike/postID
//@desc     unlike a post
//@access   Private

router.put("/unlike/:postID", auth, PostsController.unlike);

//@route    Post api/posts/:postID
//@desc     Make a comment
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
  PostsController.comment
);

//@route    DELETE api/posts/comment/:postID/:commentID
//@desc     DELETE comment
//@access   Private

router.delete(
  "/comment/:postID/:commentID",
  auth,
  PostsController.deleteComment
);

module.exports = router;
