const express = require("express");
const router = express.Router();

// CONTROLLERS
const {
  loginView, login, registerView, logout} = require("../controllers/authControllers.js");

//ROUTES
router.get("/login", loginView);
router.get("/login", login);
router.post("/login", login);

router.get("/register", registerView);


router.get("/logout", logout);

module.exports = router;
