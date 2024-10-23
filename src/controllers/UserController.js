const userService = require("@/services/UserService");
const asyncHandler = require("@/middlewares/asyncHandler");

class UserController {
  createUser = asyncHandler(async (req, res) => {
    res.status(201).json(await userService.createUser(req.body));
  });

  getAllUsers = asyncHandler(async (req, res) => {
    res.status(200).json(await userService.getAllUsers());
  });

  getUserById = asyncHandler(async (req, res) => {
    res.status(200).json(await userService.getUserById(req.params.id));
  });

  updateUser = asyncHandler(async (req, res) => {
    res.status(200).json(await userService.updateUser(req.params.id, req.body));
  });

  deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json(await userService.deleteUser(req.params.id));
  });
}

module.exports = new UserController();
