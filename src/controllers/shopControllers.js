const fs = require("fs");
const funkos = JSON.parse(fs.readFileSync("./data/funko.json", "utf-8"));

const shopView = (req, res) => {
  res.render("shop", { titulo: "SHOP", funkos });
};

const getAllItems = (req, res) => {};


const itemView = (req, res) => {
  // Obtiene el id de los parámetros de la solicitud
  const id = req.params.product_id;

  // Encuentra el objeto en el array funkos que coincide con el id
  const selectedFunko = funkos.find((funko) => funko.product_id === Number(id));
console.log(id);
  // Verifica si se encontró el funko con el id proporcionado
  if (selectedFunko) {
    // Renderiza la vista 'item' y pasa el objeto del funko encontrado
    res.render("item", { titulo: `ITEM - ${id}`, funko: selectedFunko,funkos});
  }
}

const getItem = (req, res) => {

};

const cartView = (req, res) => {
  res.render("cart", { titulo: "CART", funkos });
};

const getCartItems = (req, res) => {};

  module.exports = {shopView, getAllItems, itemView, getItem, cartView, getCartItems};