const express = require("express");
const productoController = require("@/controllers/ProductoController");
const {
  createValidation,
  updateValidation,
} = require("@/validations/productoValidation");
const validateFields = require("@/middlewares/validateFields");
const validateId = require("@/middlewares/validateId");
const upload = require("@/middlewares/multer");
const { existImageFile, isImageFile } = require("@/middlewares/fileValidator");

const router = express.Router();

router
  .route("/")
  .get(productoController.getAll)
  .post(
    upload.single("imagen"),
    createValidation,
    validateFields,
    existImageFile,
    productoController.create
  );
router
  .route("/:id")
  .get(validateId, productoController.getById)
  .put(
    upload.single("imagen"),
    validateId,
    updateValidation,
    validateFields,
    isImageFile,
    productoController.update
  )
  .delete(validateId, productoController.delete);

module.exports = router;
