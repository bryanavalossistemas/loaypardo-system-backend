const express = require("express");
const clienteNaturalController = require("@/controllers/ClienteNaturalController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/clienteNaturalValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(clienteNaturalController.getAll)
  .post(createValidation, validateFields, clienteNaturalController.create);
router
  .route("/:id")
  .get(validateId, clienteNaturalController.getById)
  .put(
    validateId,
    updateValidation,
    validateFields,
    clienteNaturalController.update
  )
  .delete(validateId, clienteNaturalController.delete);

module.exports = router;
