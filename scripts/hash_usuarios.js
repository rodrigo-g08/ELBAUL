// scripts/hash_usuarios.js
const bcrypt = require('bcrypt');
const fs = require('fs');

// Simulación de tus usuarios de ejemplo
const usuarios = [
  {
    correo: 'renzo.barrios@gmail.com',
    contrasena: 'admin123',
    rol: 'admin',
  },
  {
    correo: 'cmendoza@gmail.com',
    contrasena: 'CesarM#2023',
    rol: 'cliente',
  }
];

// Función para hashear las contraseñas y mostrar los usuarios listos
async function hashearUsuarios() {
  const usuariosHasheados = [];

  for (const usuario of usuarios) {
    const hash = await bcrypt.hash(usuario.contrasena, 10);
    usuariosHasheados.push({
      correo: usuario.correo,
      contrasena: hash,
      rol: usuario.rol
    });
  }

  console.log('Usuarios con contraseña hasheada:\n');
  console.log(JSON.stringify(usuariosHasheados, null, 2));

  // Opcional: guardar en un archivo
  fs.writeFileSync('usuarios_hasheados.json', JSON.stringify(usuariosHasheados, null, 2));
}

hashearUsuarios();
