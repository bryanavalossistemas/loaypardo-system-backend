const { Proveedor } = require("@/models");

class ProveedorService {
  async create({ nombre, ruc, direccion, telefono, celular, correo }) {
    const proveedorExiste = await Proveedor.findOne({
      where: { ruc },
    });
    if (proveedorExiste) {
      throw {
        message: "Error de conflicto",
        statusCode: 409,
        errors: [
          {
            message: "El ruc ya está en uso.",
            path: "ruc",
          },
        ],
      };
    }

    return await Proveedor.create({
      nombre,
      ruc,
      direccion,
      telefono,
      celular,
      correo,
    });
  }

  async getAll() {
    return await Proveedor.findAll();
  }

  async getById({ id }) {
    const proveedor = await Proveedor.findByPk(id);
    if (!proveedor) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "Proveedor no encontrado.",
            path: "id",
          },
        ],
      };
    }

    return proveedor;
  }

  async update({ id, nombre, ruc, direccion, telefono, celular, correo }) {
    const proveedor = await this.getById({ id });
    if (ruc) {
      const proveedorExiste = await Proveedor.findOne({
        where: { ruc },
      });

      if (proveedorExiste && proveedorExiste.id !== proveedor.id) {
        throw {
          message: "Error de conflicto",
          statusCode: 409,
          errors: [
            {
              message: "El ruc ya está en uso.",
              path: "ruc",
            },
          ],
        };
      }
    }

    return await proveedor.update({
      nombre,
      ruc,
      direccion,
      telefono,
      celular,
      correo,
    });
  }

  async delete({ id }) {
    const proveedor = await this.getById({ id });
    await proveedor.destroy();

    return "Proveedor eliminado correctamente";
  }
}

module.exports = new ProveedorService();
