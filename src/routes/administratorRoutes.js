const express = require("express");
const administratorController = require("@/controllers/AdministratorController");
const {
  administratorValidateCreate,
  administratorValidateUpdate,
} = require("@/middlewares/administratorValidate");

const router = express.Router();

router
  .route("/")
  .get(administratorController.getAllAdministrators)
  .post(
    administratorValidateCreate,
    administratorController.createAdministrator
  );
router
  .route("/:id")
  .get(administratorController.getAdministratorById)
  .put(administratorValidateUpdate, administratorController.updateAdministrator)
  .delete(administratorController.deleteAdministrator);

module.exports = router;
