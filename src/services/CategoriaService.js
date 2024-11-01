const { Categoria } = require("@/models");

class CategoriaService {
  async create({ nombre }) {
    const categoriaExiste = await Categoria.findOne({
      where: { nombre },
    });
    if (categoriaExiste) {
      throw {
        message: "Error de conflicto",
        statusCode: 409,
        errors: [
          {
            message: "El nombre ya está en uso.",
            path: "nombre",
          },
        ],
      };
    }

    return await Categoria.create({ nombre });
  }

  async getAll() {
    return await Categoria.findAll();
  }

  async getById({ id }) {
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "Categoría no encontrada.",
            path: "id",
          },
        ],
      };
    }

    return categoria;
  }

  async update({ id, nombre }) {
    const categoria = await this.getById({ id });
    if (nombre) {
      const categoriaExiste = await Categoria.findOne({
        where: { nombre },
      });

      if (categoriaExiste && categoriaExiste.id !== categoria.id) {
        throw {
          message: "Error de conflicto",
          statusCode: 409,
          errors: [
            {
              message: "El nombre ya está en uso.",
              path: "nombre",
            },
          ],
        };
      }
    }

    return await categoria.update({ nombre });
  }

  async delete({ id }) {
    const categoria = await this.getById({ id });
    await categoria.destroy();

    return "Categoría eliminada correctamente";
  }
}

module.exports = new CategoriaService();
