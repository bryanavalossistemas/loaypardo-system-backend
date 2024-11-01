const { Vendedor, Usuario } = require("@/models");

class VendedorService {
  async create({ nombre, username, password, dni, telefono, celular, correo }) {
    let errors = [];
    const usuarioExiste = await Usuario.findOne({ where: { username } });
    if (usuarioExiste) {
      errors.push({
        message: "El nombre de usuario ya está en uso.",
        path: "username",
      });
    }
    const vendedorExiste = await Vendedor.findOne({ where: { dni } });
    if (vendedorExiste) {
      errors.push({
        message: "El dni ya está en uso.",
        path: "dni",
      });
    }
    if (errors.length > 0) {
      throw {
        message: "Error de conflicto xd",
        statusCode: 409,
        errors,
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
    return await Vendedor.findAll({
      include: [{ model: Usuario, as: "usuario" }],
    });
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
    let errors = [];
    const vendedor = await this.getById({ id });
    if (username) {
      const usuarioExiste = await Usuario.findOne({ where: { username } });

      if (usuarioExiste && usuarioExiste.id !== vendedor.usuarioId) {
        errors.push({
          message: "El nombre de usuario ya está en uso.",
          path: "username",
        });
      }
    }

    if (dni) {
      const vendedorExiste = await Vendedor.findOne({ where: { dni } });

      if (vendedorExiste && vendedorExiste.id !== vendedor.id) {
        errors.push({
          message: "El dni ya está en uso.",
          path: "dni",
        });
      }
    }

    if (errors.length > 0) {
      throw {
        message: "Error de conflicto xd",
        statusCode: 409,
        errors,
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
