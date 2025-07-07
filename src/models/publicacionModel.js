const mongoose = require("mongoose");

const publicacionSchema = new mongoose.Schema({
  usuario: String,
  contenido: String,
  imagen_url: String,
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Publicacion", publicacionSchema);
