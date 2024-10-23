const express = require("express");
const RolController = require("@/controllers/RolController");
const {
  rolValidateCreate,
  rolValidateUpdate,
} = require("@/middlewares/rolValidate");

const router = express.Router();

router
  .route("/")
  .get(RolController.getAllRoles)
  .post(rolValidateCreate, RolController.createRol);
router
  .route("/:id")
  .get(RolController.getRolById)
  .put(rolValidateUpdate, RolController.updateRol)
  .delete(RolController.deleteRol);

module.exports = router;
