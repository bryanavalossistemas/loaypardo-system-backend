const rolService = require("@/services/RolService");
const asyncHandler = require("@/middlewares/asyncHandler");

class RoleController {
  createRol = asyncHandler(async (req, res) => {
    res.status(201).json(await rolService.createRol(req.body));
  });

  getAllRoles = asyncHandler(async (req, res) => {
    res.status(200).json(await rolService.getAllRoles());
  });

  getRolById = asyncHandler(async (req, res) => {
    res.status(200).json(await rolService.getRolById(req.params.id));
  });

  updateRol = asyncHandler(async (req, res) => {
    res.status(200).json(await rolService.updateRol(req.params.id, req.body));
  });

  deleteRol = asyncHandler(async (req, res) => {
    res.status(200).json(await rolService.deleteRol(req.params.id));
  });
}

module.exports = new RoleController();
