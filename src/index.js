require('./database'); // conexión a MongoDB
const express = require("express");
const app = express();
const path = require("path");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/productos", require("./routes/productoRoute"));

// Levantar servidor
app.listen(3000, () => console.log("🚀 Servidor corriendo en http://localhost:3000"));