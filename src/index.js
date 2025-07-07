require('./database');
const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cerrar-sesion", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});


// Ruta para productos
app.use("/productos", require("./routes/productoRoute"));
app.use("/foro", require("./routes/publicacionRoute"));
// index.js o app.js
app.use("/iniciar-sesion", require("./routes/sesionRoute"));

app.listen(3000, () => console.log("🚀 Servidor en http://localhost:3000"));

const session = require("express-session");

app.use(session({
  secret: "mi_secreto_seguro", // usa uno real en producción
  resave: false,
  saveUninitialized: true,
}));