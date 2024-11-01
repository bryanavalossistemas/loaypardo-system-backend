const express = require("express");
const clienteJuridicoController = require("@/controllers/ClienteJuridicoController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/clienteJuridicoValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(clienteJuridicoController.getAll)
  .post(createValidation, validateFields, clienteJuridicoController.create);
router
  .route("/:id")
  .get(validateId, clienteJuridicoController.getById)
  .put(
    validateId,
    updateValidation,
    validateFields,
    clienteJuridicoController.update
  )
  .delete(validateId, clienteJuridicoController.delete);

module.exports = router;
