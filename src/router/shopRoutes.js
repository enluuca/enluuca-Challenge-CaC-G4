const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  shopView, getAllItems, itemView, getItem, cartView, getCartItems} = require("../controllers/shopControllers.js");

// ROUTES
router.get("/", shopView);
router.get("/", getAllItems);

router.get("/item/:product_id", itemView);
router.get("/item/:product_id", getItem);


router.get("/cart", cartView);
router.get("/cart", getCartItems);


module.exports = router;
