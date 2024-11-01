const clienteNaturalService = require("@/services/ClienteNaturalService");
const asyncHandler = require("@/middlewares/asyncHandler");

class ClienteNaturalController {
  create = asyncHandler(async (req, res) => {
    const { nombre, dni, direccion, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await clienteNaturalService.create({
        nombre,
        dni,
        direccion,
        celular,
        correo,
      }),
    });
  });

  getAll = asyncHandler(async (req, res) => {
    return res.status(201).json({
      success: true,
      data: await clienteNaturalService.getAll(),
    });
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    res.status(200).json(await clienteNaturalService.getById({ id }));
  });

  update = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { nombre, dni, direccion, celular, correo } = req.body;

    return res.status(201).json({
      success: true,
      data: await clienteNaturalService.update({
        id,
        nombre,
        dni,
        direccion,
        celular,
        correo,
      }),
    });
  });

  delete = asyncHandler(async (req, res) => {
    const { id } = req.params;

    return res.status(201).json({
      success: true,
      message: await clienteNaturalService.delete({ id }),
    });
  });
}

module.exports = new ClienteNaturalController();
