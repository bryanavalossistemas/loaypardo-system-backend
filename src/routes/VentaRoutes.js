const express = require("express");
const ventaController = require("@/controllers/VentaController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/ventaValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(ventaController.getAll)
  .post(createValidation, validateFields, ventaController.create);
router
  .route("/:id")
  .get(validateId, ventaController.getById)
  .put(validateId, updateValidation, validateFields, ventaController.update)
  .delete(validateId, ventaController.delete);

module.exports = router;
