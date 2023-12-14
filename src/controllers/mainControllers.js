const fs = require("fs");
const funkos = JSON.parse(fs.readFileSync("./data/funko.json", "utf-8"));

const homeView = (req, res) => {
  const colecciones = [];
  const existeCategoria = [];
  funkos.forEach((funko) => {
    if (!existeCategoria.includes(funko.category_name)) {
      existeCategoria.push(funko.category_name);
      colecciones.push(funkos);
    }
  });

  res.render("home", { titulo: "HOME", funkos:funkos });
};
const contactView = (req, res) => {
  res.render("contact", { titulo: "CONTACT" });
};


module.exports = {homeView, contactView};