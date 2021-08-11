const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const { check, validationResult } = require("express-validator");

const UserController = require("../../controllers/User.Controller");

//@route    POST api/auth
//@desc     Add a User Route
//@access   Public
router.post(
  "/",
  [
    check("firstName", "First name is Required")
      .not()
      .isEmpty(),
    check("lastName", "Last name is Required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  UserController.registerUser
);

//@route    GET api/posts/
//@desc     Get all reviews from a user
//@access   Private

router.get("/:userID", auth, UserController.getUsersReviews);

module.exports = router;
