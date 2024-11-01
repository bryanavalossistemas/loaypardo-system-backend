const categoriaService = require("@/services/CategoriaService");
const asyncHandler = require("@/middlewares/asyncHandler");

class CategoriaController {
  create = asyncHandler(async (req, res) => {
    const { nombre } = req.body;

    return res.status(201).json({
      success: true,
      data: await categoriaService.create({ nombre }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await categoriaService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await categoriaService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    return res.status(201).json({
      success: true,
      data: await categoriaService.update({ id, nombre }),
    });
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    return res.status(201).json({
      success: true,
      message: await categoriaService.delete({ id }),
    });
  });
}

module.exports = new CategoriaController();
