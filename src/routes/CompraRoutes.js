const express = require("express");
const compraController = require("@/controllers/CompraController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/compraValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");

const router = express.Router();

router
  .route("/")
  .get(compraController.getAll)
  .post(createValidation, validateFields, compraController.create);
router
  .route("/:id")
  .get(validateId, compraController.getById)
  .put(validateId, updateValidation, validateFields, compraController.update)
  .delete(validateId, compraController.delete);

module.exports = router;
