const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  homeView,
  contactView,
} = require("../controllers/mainControllers.js");

router.get("/", homeView);
router.get("/home", homeView);
router.get("/contact", contactView);

module.exports = router;
