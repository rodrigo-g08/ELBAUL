const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://mongo-server:27017/elbaul"); // igual a tu docker-compose

// rutas
app.use("/productos", require("./routes/productoRoute"));

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
