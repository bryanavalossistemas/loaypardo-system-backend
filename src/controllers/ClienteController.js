const clienteService = require("@/services/ClienteService");
const asyncHandler = require("@/middlewares/asyncHandler");

class ClienteController {
  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await clienteService.getAll(),
    });
  });
}

module.exports = new ClienteController();
