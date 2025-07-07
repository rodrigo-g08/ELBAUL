const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  nombre: { type: String, required: true }
});

module.exports = mongoose.model("Usuario", usuarioSchema);
