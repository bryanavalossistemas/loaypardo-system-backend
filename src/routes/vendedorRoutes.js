const express = require("express");
const vendedorController = require("@/controllers/VendedorController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/vendedorValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");
const authenticate = require("@/middlewares/authenticateMiddleware");
const authorize = require("@/middlewares/authorizeMiddleware");

const router = express.Router();

router.use(authenticate, authorize(1));

router
  .route("/")
  .get(vendedorController.getAll)
  .post(createValidation, validateFields, vendedorController.create);
router
  .route("/:id")
  .get(validateId, vendedorController.getById)
  .put(validateId, updateValidation, validateFields, vendedorController.update)
  .delete(validateId, vendedorController.delete);

module.exports = router;
