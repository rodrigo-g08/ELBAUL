const Publicacion = require("../models/publicacionModel");

// Publicaciones predeterminadas
const publicacionesIniciales = [
  {
    usuario: "Administrador",
    contenido: "¡Bienvenido a la comunidad de El Baúl! 🎉 Comparte tus dudas o experiencias.",
    imagen_url: "",
    fecha: new Date()
  },
  {
    usuario: "Lucía",
    contenido: "¿Qué productos recomiendan de segunda mano?",
    imagen_url: "",
    fecha: new Date()
  }
];

// Mostrar el formulario + todas las publicaciones (en una misma vista)
exports.formulario = async (req, res) => {
  const publicaciones = await Publicacion.find().sort({ fecha: -1 });
  res.render("publicaciones", { publicaciones });
};

// Crear una nueva publicación
exports.crear = async (req, res) => {
  const nueva = new Publicacion(req.body);
  await nueva.save();
  res.redirect("/foro");
};

// Eliminar publicación
exports.eliminar = async (req, res) => {
  await Publicacion.findByIdAndDelete(req.params.id);
  res.redirect("/foro");
};
