const Usuario = require("../models/usuarioModel");

// Muestra el formulario de inicio de sesión
exports.formularioLogin = (req, res) => {
  res.render("iniciarSesion");
};

// Procesa el login (aquí es sin autenticación real, solo validación simple)
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Usuario.findOne({ email, password });

  if (!user) {
    return res.render("iniciarSesion", { error: "Usuario no encontrado" });
  }

  req.session.usuario = user.nombre;
  res.redirect("/");
};

exports.ingresar = async (req, res) => {
  const { correo, contrasena } = req.body;
  const usuario = await Usuario.findOne({ correo });

  if (!usuario || usuario.contrasena !== contrasena) {
    return res.render("iniciarSesion", { mensaje: "Usuario no encontrado o contraseña incorrecta" });
  }

  req.session.usuario = usuario.nombre; // 🔴 Guarda el nombre del usuario en sesión
  res.redirect("/");
};

