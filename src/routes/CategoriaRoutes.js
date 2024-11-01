const express = require("express");
const categoriaController = require("@/controllers/CategoriaController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/categoriaValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(categoriaController.getAll)
  .post(createValidation, validateFields, categoriaController.create);
router
  .route("/:id")
  .get(validateId, categoriaController.getById)
  .put(validateId, updateValidation, validateFields, categoriaController.update)
  .delete(validateId, categoriaController.delete);

module.exports = router;
