const vendedorService = require("@/services/VendedorService");
const asyncHandler = require("@/middlewares/asyncHandler");

class VendedorController {
  create = asyncHandler(async (req, res) => {
    const { nombre, username, password, dni, telefono, celular, correo } =
      req.body;

    return res.status(201).json({
      success: true,
      data: await vendedorService.create({
        nombre,
        username,
        password,
        dni,
        telefono,
        celular,
        correo,
      }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await vendedorService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await vendedorService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { nombre, username, password, dni, telefono, celular, correo } =
      req.body;

    const { id } = req.params;

    return res.status(201).json({
      success: true,
      data: await vendedorService.update({
        id,
        nombre,
        username,
        password,
        dni,
        telefono,
        celular,
        correo,
      }),
    });
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    return res.status(201).json({
      success: true,
      message: await vendedorService.delete({ id }),
    });
  });
}

module.exports = new VendedorController();
