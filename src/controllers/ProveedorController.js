const proveedorService = require("@/services/ProveedorService");
const asyncHandler = require("@/middlewares/asyncHandler");

class ProveedorController {
  create = asyncHandler(async (req, res) => {
    const { nombre, ruc, direccion, telefono, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await proveedorService.create({
        nombre,
        ruc,
        direccion,
        telefono,
        celular,
        correo,
      }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await proveedorService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await proveedorService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre, ruc, direccion, telefono, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await proveedorService.update({
        id,
        nombre,
        ruc,
        direccion,
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
      message: await proveedorService.delete({ id }),
    });
  });
}

module.exports = new ProveedorController();
