const productoService = require("@/services/ProductoService");
const asyncHandler = require("@/middlewares/asyncHandler");

class ProductoController {
  create = asyncHandler(async (req, res) => {
    const { nombre, precioCosto, precioVenta, stock, categoriaId, marcaId } =
      req.body;
    const { file } = req;

    return res.status(201).json({
      success: true,
      data: await productoService.create({
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        file,
      }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await productoService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await productoService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre, precioCosto, precioVenta, stock, categoriaId, marcaId } =
      req.body;
    const { file } = req;

    return res.status(201).json({
      success: true,
      data: await productoService.update({
        id,
        nombre,
        precioCosto,
        precioVenta,
        stock,
        categoriaId,
        marcaId,
        file,
      }),
    });
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    return res.status(201).json({
      success: true,
      message: await productoService.delete({ id }),
    });
  });
}

module.exports = new ProductoController();
