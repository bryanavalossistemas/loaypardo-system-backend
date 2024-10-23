const administratorService = require("@/services/AdministratorService");
const asyncHandler = require("@/middlewares/asyncHandler");

class AdministratorController {
  createAdministrator = asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;

    const { administrator, user } =
      await administratorService.createAdministrator({
        name,
        username,
        password,
      });

    return res.status(201).json({
      success: true,
      data: { administrator, user },
    });
  });

  getAllAdministrators = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await administratorService.getAllAdministrators(),
    });
  });

  getAdministratorById = asyncHandler(async (req, res) => {
    res
      .status(200)
      .json(await administratorService.getAdministratorById(req.params.id));
  });

  updateAdministrator = asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;

    const { user, admin } = await administratorService.updateAdministrator({
      id: req.params.id,
      name,
      username,
      password,
    });

    return res.status(201).json({
      success: true,
      data: { admin, user },
    });
  });

  deleteAdministrator = asyncHandler(async (req, res) => {
    res
      .status(200)
      .json(await administratorService.deleteAdministrator(req.params.id));
  });
}

module.exports = new AdministratorController();
