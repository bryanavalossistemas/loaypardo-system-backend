const express = require("express");
const clienteController = require("@/controllers/ClienteController");

const router = express.Router();

router.route("/").get(clienteController.getAll);

module.exports = router;
