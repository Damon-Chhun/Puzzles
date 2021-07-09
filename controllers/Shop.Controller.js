const Shop = require("../models/Shop");
const Cart = require("../models/Cart");

const { check, validationResult } = require("express-validator");

module.exports = {
  AddItemToCart: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { quantity, productID } = req.body;
    try {
      console.log(productID, "PRODUCT ID ID ID I");
      let doesCartExist = await Cart.findOne({ userId: req.user.id });
      console.log(doesCartExist);
      const item = await Shop.findById(productID);
      console.log(item, "ITEM ITEM ITEM ITEM");
      console.log(item.Department, "DEPRAESDKLFJSDKLFJSDLFJSDLO:");

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
          return res.status(400).json({ msg: "No Item Exists Exist" });
        }
        console.log(doesItemExist, "    FIND INDEX");
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
            name: item.title,
            department: item.Department,
            price: item.price,
            imageURL: item.imageURL
          });
          await doesCartExist.save();
          res.json(doesCartExist);
        }
      }
      //build Cart object (No Cart exists)
      else {
        const item = await Shop.findById(productID);
        let reqCart = new Cart({
          userId: req.user.id,
          products: [
            {
              productID,
              quantity,
              Department: item.Department,
              item: item.name,
              price: item.price,
              imageURL: ""
            }
          ]
        });
        console.log(reqCart);
        await reqCart.save();
        return res.json(reqCart);
      }

      await doesCartExist.save();
      return res.json(doesCartExist);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("something went wrong :(");
    }
  },

  clearCart: async (req, res) => {
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
      console.log(err.message);
      res.status(500).json("Server Error");
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Shop.find();
      console.log("GetShop");
      res.send(products);
    } catch (error) {
      console.log(error.message);
      res.status(404).json("Server Error");
    }
  },
  getCartItems: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.user.id });
      console.log(cart, "GET CART ITEMS !!!!!!");
      res.send(cart);
    } catch (error) {
      console.log(error.message);
      res.status(404).json("Server Error");
    }
  },
  clearCartItem: async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.user.id });
      const { productID } = req.body;
      console.log(productID, "ProductID");

      const indexOfSplice = cart.products.findIndex(
        item => item.productID == productID
      );
      console.log(indexOfSplice, "INDEX OF SPLICE");
      const itemRemoved = cart.products.splice(indexOfSplice, 1);
      console.log(itemRemoved, "ITEM REMOVED FROM CART");
      console.log(cart, "CART CART CART CART");
      await cart.save();
      res.json(itemRemoved);
    } catch (error) {}
  }
};
