const fs = require("fs");
const funkos = JSON.parse(fs.readFileSync("./data/funko.json", "utf-8"));

const adminView = (req, res) => {
  res.render("listProds", { titulo: "ADMIN", funkos });
};

const createView = (req, res) => {
  res.render("create", { titulo: "ADMIN - CREATE" });
};

const editView = (req, res) => {
  res.render("edit", { titulo: "ADMIN - EDIT", funkos });
};

const deleteItem = (req, res) => {};

module.exports = { adminView, createView, editView, deleteItem};
