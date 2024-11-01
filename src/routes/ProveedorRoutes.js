const express = require("express");
const proveedorController = require("@/controllers/ProveedorController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/proveedorValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(proveedorController.getAll)
  .post(createValidation, validateFields, proveedorController.create);
router
  .route("/:id")
  .get(validateId, proveedorController.getById)
  .put(validateId, updateValidation, validateFields, proveedorController.update)
  .delete(validateId, proveedorController.delete);

module.exports = router;
