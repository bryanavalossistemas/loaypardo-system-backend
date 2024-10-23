const express = require("express");
const userController = require("@/controllers/UserController");
const {
  userValidateCreate,
  userValidateUpdate,
} = require("@/middlewares/userValidate");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userValidateCreate, userController.createUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .put(userValidateUpdate, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
