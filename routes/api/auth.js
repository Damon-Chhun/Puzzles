const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const AuthController = require("../../controllers/Auth.Controller");

const { check, validationResult } = require("express-validator");

//@route    GET api/auth
//@desc     Get profile route
//@access   Private
router.get("/", auth, AuthController.getProfile);

//@route    POST api/auth
//@desc     Login a user
//@access   Private
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is invalid").exists()
  ],
  AuthController.Login
);

//@route    GET api/auth/getUserInfo
//@desc     Get Name of a profile, given their user._id
//@access   Public
router.get("/:userID", AuthController.getName);

module.exports = router;
