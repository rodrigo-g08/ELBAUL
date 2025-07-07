const express = require("express");
const router = express.Router();
const sesionController = require("../controllers/sesionController");

router.get("/", (req, res) => {
  res.render("iniciarSesion", { error: null });
});

router.post("/", sesionController.login);

module.exports = router;
