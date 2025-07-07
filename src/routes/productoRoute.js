const express = require("express");
const router = express.Router();
const productoCtrl = require("../controllers/productoController");

router.get("/", productoCtrl.getProductos);
router.post("/crear", productoCtrl.createProducto);
router.post("/editar/:id", productoCtrl.updateProducto);
router.get("/eliminar/:id", productoCtrl.deleteProducto);

module.exports = router;
