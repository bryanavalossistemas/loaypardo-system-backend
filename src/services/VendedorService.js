const { Vendedor, Usuario } = require("@/models");

class VendedorService {
  async create({ nombre, username, password, dni, telefono, celular, correo }) {
    const usuarioExiste = await Usuario.findOne({ where: { username } });
    if (usuarioExiste) {
      throw {
        message: "Error de conflicto",
        statusCode: 409,
        errors: [
          {
            message: "El nombre de usuario ya está en uso.",
            path: "username",
          },
        ],
      };
    }
    const usuario = await Usuario.create({
      nombre,
      username,
      password,
      rolId: 2,
    });
    const vendedor = await Vendedor.create({
      dni,
      telefono,
      celular,
      correo,
      usuarioId: usuario.id,
    });

    return { usuario, vendedor };
  }

  async getAll() {
    return await Vendedor.findAll();
  }

  async getById({ id }) {
    const vendedor = await Vendedor.findByPk(id);
    if (!vendedor) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "Vendedor no encontrado.",
            path: "id",
          },
        ],
      };
    }
    return vendedor;
  }

  async update({
    id,
    nombre,
    username,
    password,
    dni,
    telefono,
    celular,
    correo,
  }) {
    const vendedor = await this.getById({ id });
    const usuarioExiste = await Usuario.findOne({ where: { username } });

    if (usuarioExiste && usuarioExiste.id !== vendedor.usuarioId) {
      throw {
        message: "Error de conflicto",
        statusCode: 409,
        errors: [
          {
            message: "El nombre de usuario ya está en uso.",
            path: "username",
          },
        ],
      };
    }

    const usuario = await Usuario.findByPk(vendedor.usuarioId);
    await usuario.update({ nombre, username, password });
    await vendedor.update({ dni, telefono, celular, correo });

    return { usuario, vendedor };
  }

  async delete({ id }) {
    const vendedor = await this.getById({ id });
    const usuario = await Usuario.findByPk(vendedor.usuarioId);
    await vendedor.destroy();
    await usuario.destroy();
    return "Vendedor eliminado correctamente";
  }
}

module.exports = new VendedorService();
