const clienteJuridicoService = require("@/services/ClienteJuridicoService");
const asyncHandler = require("@/middlewares/asyncHandler");

class ClienteJuridicoController {
  create = asyncHandler(async (req, res) => {
    const { nombre, ruc, direccion, telefono, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await clienteJuridicoService.create({
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
      data: await clienteJuridicoService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await clienteJuridicoService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre, ruc, direccion, telefono, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await clienteJuridicoService.update({
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
      message: await clienteJuridicoService.delete({ id }),
    });
  });
}

module.exports = new ClienteJuridicoController();
