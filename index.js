// Iniciar EXPRESS
const express = require("express");
const app = express();
// PATH
const path = require("path");
// DOTENV (para variables de entorno)
const dotenv = require("dotenv");
dotenv.config();
// PUERTO
const port = 3030; 

// JSON() parsea a 'json' la información proveniente del body (req.body)
app.use(express.json());
// hasta acá conforma el middleware
// VIEWS
// ruta de las vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

// ruta de carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const mainRoutes = require("./src/router/mainRoutes.js");
const shopRoutes = require("./src/router/shopRoutes.js");
const adminRoutes = require("./src/router/adminRoutes.js");
const authRoutes = require("./src/router/authRoutes.js")

// ROUTES
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);


app.listen(port, () => {

  console.log(`Servidor corriendo en el puerto ${port}`);
});
