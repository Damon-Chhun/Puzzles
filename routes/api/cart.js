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
    const { id } = req.user;
    console.log(id);
    try {
      let doesCartExist = await Cart.findOne({ userId: id });

      if (!doesCartExist && quantity < 0) {
        // If trying to reduce a product in a cart that doesn't exist
        return res.status(400).json({ msg: "No Cart Exist" });
      }

      if (doesCartExist) {
        // If there is already a cart that exists
        let doesItemExist = doesCartExist.products.findIndex(
          product => product.productID == productID
        );

        if (doesCartExist && quantity < 0 && doesItemExist < 0) {
          // If trying to reduce a product in a cart that doesn't exist
          return res.status(400).json({ msg: "No Item Exist" });
        }

        if (doesItemExist > -1) {
          //Item already exists in cart (change quantity)
          doesCartExist.products[doesItemExist].quantity += quantity;
          console.log(doesCartExist.products[doesItemExist].quantity);
          if (doesCartExist.products[doesItemExist].quantity <= 0) {
            doesCartExist.products.splice(doesItemExist, 1);
          }
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
          userId: id,
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

//@route    POST api/shop
//@desc     Reduce quantity of an item
//@access   Private
// router.post(
//   "/",
//   [
//     auth,
//     [
//       check("productID", "Invalid productID").exists(),
//       check("quantity", "No quantity provided").isNumeric()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     console.log(req.body);

//     const { productID, quantity } = req.body;
//     const { id } = req.user;
//     try {
//       let doesCartExist = await Cart.findOne({ userId: id });

//       // If there is already a cart that exists
//       if (doesCartExist) {
//         let doesItemExist = doesCartExist.products.findIndex(
//           product => product.productID == productID
//         );

//         if (doesItemExist > -1) {
//           //Item already exists in cart (change quantity)
//           doesCartExist.products[doesItemExist].quantity -= quantity;
//           console.log(doesCartExist.products[doesItemExist].quantity);
//           if (doesCartExist.products[doesItemExist].quantity == 0) {
//             doesCartExist.products.splice(doesItemExist, 1);
//             console.log("splice", doesCartExist);
//           }
//         }
//       } else {
//         //item doesn't exist in cart
//         return res.status(400).json({ errors: "item doesn't exist in cart" });
//       }
//       await doesCartExist.save();
//       res.json(doesCartExist);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("something went wrong :(");
//     }
//   }
// );

//@route    DELETE api/shop
//@desc     Clear the cart
//@access   Private
router.delete("/", auth, async (req, res) => {
  try {
    const doesCartExist = await Cart.findOne({ userId: req.user.id });
    console.log(req.user.id);

    // check if cart exists
    if (!doesCartExist) {
      return res.status(404).json({ msg: "Cart doesn't exist" });
    }

    await doesCartExist.remove();
    res.json({ msg: "Cart removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
