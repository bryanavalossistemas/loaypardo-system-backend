const marcaService = require("@/services/MarcaService");
const asyncHandler = require("@/middlewares/asyncHandler");

class MarcaController {
  create = asyncHandler(async (req, res) => {
    const { nombre } = req.body;

    return res.status(201).json({
      success: true,
      data: await marcaService.create({ nombre }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await marcaService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await marcaService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    return res.status(201).json({
      success: true,
      data: await marcaService.update({ id, nombre }),
    });
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    return res.status(201).json({
      success: true,
      message: await marcaService.delete({ id }),
    });
  });
}

module.exports = new MarcaController();
