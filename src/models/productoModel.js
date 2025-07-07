// src/models/productoModel.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: { type: String },
  descripcion: { type: String },
  precio: { type: Number },
  estado: { type: String }, // "nuevo", "usado"
  categoria: { type: String },
  imagen_url: { type: String },
  stock: { type: Number }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model("productos", productoSchema);
