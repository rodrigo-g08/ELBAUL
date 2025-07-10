const express = require("express");
const router = express.Router();

// Importar controladores
const {
    obtenerProductos,
    obtenerProductoPorId,
    buscarProductos
} = require("../controllers/productos.controller");

const {
    crearEditarResena,
    obtenerResenasProducto,
    obtenerMiResena,
    eliminarMiResena
} = require("../controllers/resenas.controller");

// Importar middleware
const { verificarAuth } = require("../middleware/auth.middleware");

// ==========================================
// RUTAS PÚBLICAS DE PRODUCTOS
// ==========================================

/**
 * @route   GET /api/productos
 * @desc    Obtener productos con filtros y paginación
 * @access  Public
 */
router.get("/", obtenerProductos);

/**
 * @route   GET /api/productos/buscar
 * @desc    Buscar productos por término
 * @access  Public
 */
router.get("/buscar", buscarProductos);

/**
 * @route   GET /api/productos/:id
 * @desc    Obtener producto específico por ID
 * @access  Public
 */
router.get("/:id", obtenerProductoPorId);

// ==========================================
// RUTAS DE RESEÑAS DE PRODUCTOS
// ==========================================

/**
 * @route   GET /api/productos/:id/resenas
 * @desc    Obtener reseñas aprobadas de un producto específico
 * @access  Public
 * @params  id: producto_id
 * @query   {
 *            page?: number,
 *            limit?: number,
 *            puntuacion?: number (1-5)
 *          }
 */
router.get("/:id/resenas", obtenerResenasProducto);

/**
 * @route   GET /api/productos/:id/resenas/mi-resena
 * @desc    Obtener mi reseña para un producto específico
 * @access  Private (Usuario autenticado)
 * @params  id: producto_id
 */
router.get("/:id/resenas/mi-resena", verificarAuth, obtenerMiResena);

/**
 * @route   POST /api/productos/:id/resenas
 * @desc    Crear o editar reseña para un producto
 * @access  Private (Usuario autenticado)
 * @params  id: producto_id
 * @body    {
 *            puntuacion: number (1-5, requerido),
 *            comentario: string (requerido)
 *          }
 */
router.post("/:id/resenas", verificarAuth, crearEditarResena);

/**
 * @route   DELETE /api/productos/:id/resenas/mi-resena
 * @desc    Eliminar mi reseña para un producto específico
 * @access  Private (Usuario autenticado)
 * @params  id: producto_id
 */
router.delete("/:id/resenas/mi-resena", verificarAuth, eliminarMiResena);

module.exports = router;