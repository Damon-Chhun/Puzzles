const User = require("../models/User");
const { check, validationResult } = require("express-validator");
const jsonwebtoken = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      console.log(user);
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  },
  getName: async (req, res) => {
    try {
      const user = await User.findById(req.params.userID).select("-password");
      console.log(user);
      if (user !== null) {
        res.json(user.name);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  },

  Login: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      console.log(user);

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

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
  }
};
