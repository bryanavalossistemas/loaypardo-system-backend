const express = require("express");
const marcaController = require("@/controllers/MarcaController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/marcaValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(marcaController.getAll)
  .post(createValidation, validateFields, marcaController.create);
router
  .route("/:id")
  .get(validateId, marcaController.getById)
  .put(validateId, updateValidation, validateFields, marcaController.update)
  .delete(validateId, marcaController.delete);

module.exports = router;
