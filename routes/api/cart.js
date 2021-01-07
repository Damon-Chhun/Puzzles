const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const Cart = require("../../models/Cart");
const config = require("config");
const { check, validationResult } = require("express-validator");

//@route    POST api/shop
//@desc     Add products to Cart / create new Cart
//@access   Private
router.post(
  "/",
  [
    auth,
    [
      check("productID", "Invalid productID").exists(),
      check("quantity", "No quantity provided").isNumeric(),
      check("name", "Invalid Name")
        .not()
        .isEmpty(),
      check("price", "no price provided").isNumeric()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { productID, quantity, name, price } = req.body;
    const { userId } = req;
    try {
      let doesCartExist = await Cart.findOne({ userId });

      // If there is already a cart that exists
      if (doesCartExist) {
        let doesItemExist = doesCartExist.products.findIndex(
          product => product.productID == productID
        );

        if (doesItemExist > -1) {
          //Item already exists in cart (change quantity)
          doesCartExist.products[doesItemExist].quantity += quantity;
          console.log(doesCartExist.products[doesItemExist].quantity);
        } else {
          //Item doesnt exists in cart
          doesCartExist.products.push({
            productID,
            quantity,
            name,
            price
          });
        }
        await doesCartExist.save();
        res.json(doesCartExist);
      }

      //build Cart object (No Cart exists)
      else {
        let reqCart = new Cart({
          userId,
          products: [
            {
              productID,
              quantity,
              name,
              price
            }
          ]
        });
        console.log(reqCart);
        await reqCart.save();
        return res.json(reqCart);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("something went wrong :(");
    }
  }
);

module.exports = router;
