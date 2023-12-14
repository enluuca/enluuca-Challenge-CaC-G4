const express = require("express");
const router = express.Router();

// CONTROLLERS
const { adminView, createView, editView, deleteItem} = require("../controllers/adminControllers.js");

router.get("/", adminView);

router.get("/create", createView);

router.get("/edit/:id", editView);

router.delete("/edit/:id", deleteItem);

module.exports = router;