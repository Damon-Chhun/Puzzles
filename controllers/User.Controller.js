const { check, validationResult } = require("express-validator");
const jsonwebtoken = require("jsonwebtoken");
const config = require("config");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Posts = require("../models/Posts");

module.exports = {
  registerUser: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      console.log(user);

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jsonwebtoken.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  },
  getUsersReviews: async (req, res) => {
    try {
      console.log(req.params.userID);
      const user = await Posts.find({ user: req.params.userID });

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
      console.log(error.message);
      if (!reviews || user === null) {
        res.status(404).json({ msg: "Error finding post made by user" });
      }
      res.status(404).json("Server Error");
    }
  }
};
