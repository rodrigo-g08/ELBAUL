const express = require("express");
const router = express.Router();
const publicacionController = require("../controllers/publicacionController");

// Mostrará formulario + lista de publicaciones
router.get("/", publicacionController.formulario);

// Guardar nueva publicación
router.post("/crear", publicacionController.crear);

// Eliminar publicación
router.get("/eliminar/:id", publicacionController.eliminar); // ← CAMBIADO A GET

module.exports = router;
