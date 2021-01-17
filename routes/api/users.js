const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");

const UserController = require("../../controllers/User.Controller");

//@route    POST api/auth
//@desc     Add a User Route
//@access   Public
router.post(
  "/",
  [
    check("name", "Name is Required")
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
module.exports = router;
