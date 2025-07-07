const Producto = require("../models/productoModel");

exports.getProductos = async (req, res) => {
  const productos = await Producto.find();
  res.render("productos", { productos });
};

exports.createProducto = async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.redirect("/productos");
};

exports.deleteProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.redirect("/productos");
};

exports.updateProducto = async (req, res) => {
  await Producto.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/productos");
};
