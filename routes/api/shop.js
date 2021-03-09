const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const { check, validationResult } = require("express-validator");

const ShopController = require("../../controllers/Shop.Controller");

//@route    POST api/shop
//@desc     Remove an item from cart
//@access   Private
router.post("/removeCartItem", auth, ShopController.clearCartItem);

//@route    POST api/shop
//@desc     Add products to Cart / create new Cart
//@access   Private
router.post(
  ["/", "/:productID"],
  auth,
  [
    check("productID", "Invalid productID").isString(),
    check("quantity", "No quantity provided").isNumeric()
  ],
  ShopController.AddItemToCart
);

//@route    DELETE api/shop
//@desc     Clear the cart
//@access   Private
router.delete(
  ["/", "/:Department", "/:Department/:productID"],
  auth,
  ShopController.clearCart
);

//@route    GET api/shop
//@desc     Get all Cart Items
//@access   Private
router.get("/getCartItems", auth, ShopController.getCartItems);

module.exports = router;

//@route    GET api/shop
//@desc     Get all products
//@access   Public
router.get("/", ShopController.getProducts);

module.exports = router;
