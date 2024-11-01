const { Producto, ImagenProducto, Categoria, Marca } = require("@/models");
const cloudinaryService = require("@/services/CloudinaryService");

class ProductoService {
  async create({
    nombre,
    precioCosto,
    precioVenta,
    stock,
    categoriaId,
    marcaId,
    file,
  }) {
    const categoriaExiste = await Categoria.findByPk(categoriaId);
    if (!categoriaExiste) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "La categoría no existe.",
            path: "categoriaId",
          },
        ],
      };
    }
    const marcaExiste = await Marca.findByPk(marcaId);
    if (!marcaExiste) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "La marca no existe.",
            path: "marcaId",
          },
        ],
      };
    }
    const productoExiste = await Producto.findOne({
      where: { nombre },
    });
    if (productoExiste) {
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
    const imagen = await cloudinaryService.create({ buffer: file.buffer });
    const imagenProducto = await ImagenProducto.create({
      url: imagen.url,
      publicId: imagen.public_id,
    });

    return await Producto.create({
      nombre,
      precioCosto,
      precioVenta,
      stock,
      categoriaId,
      marcaId,
      imagenProductoId: imagenProducto.id,
    });
  }

  async getAll() {
    return await Producto.findAll({
      include: [
        { model: Categoria, as: "categoria" },
        { model: Marca, as: "marca" },
        { model: ImagenProducto, as: "imagenProducto" },
      ],
    });
  }

  async getById({ id }) {
    const producto = await Producto.findByPk(id);
    if (!producto) {
      throw {
        message: "Error de recurso no encontrado",
        statusCode: 404,
        errors: [
          {
            message: "Producto no encontrado.",
            path: "id",
          },
        ],
      };
    }

    return producto;
  }

  async update({
    id,
    nombre,
    precioCosto,
    precioVenta,
    stock,
    categoriaId,
    marcaId,
    file,
  }) {
    if (categoriaId) {
      const categoriaExiste = await Categoria.findByPk(categoriaId);
      if (!categoriaExiste) {
        throw {
          message: "Error de recurso no encontrado",
          statusCode: 404,
          errors: [
            {
              message: "La categoría no existe.",
              path: "categoriaId",
            },
          ],
        };
      }
    }
    if (marcaId) {
      const marcaExiste = await Marca.findByPk(marcaId);
      if (!marcaExiste) {
        throw {
          message: "Error de recurso no encontrado",
          statusCode: 404,
          errors: [
            {
              message: "La marca no existe.",
              path: "marcaId",
            },
          ],
        };
      }
    }
    const producto = await this.getById({ id });
    if (nombre) {
      const productoExiste = await Producto.findOne({
        where: { nombre },
      });

      if (productoExiste && productoExiste.id !== producto.id) {
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

    let imagenProductoId = undefined;

    if (file) {
      const imagenProducto = await ImagenProducto.findByPk(
        producto.imagenProductoId
      );
      await cloudinaryService.delete({ public_id: imagenProducto.publicId });

      const imagen = await cloudinaryService.create({ buffer: file.buffer });
      const nuevaImagenProducto = await ImagenProducto.create({
        url: imagen.url,
        publicId: imagen.public_id,
      });
      imagenProductoId = nuevaImagenProducto.id;
    }

    return await producto.update({
      nombre,
      precioCosto,
      precioVenta,
      stock,
      categoriaId,
      marcaId,
      imagenProductoId,
    });
  }

  async delete({ id }) {
    const producto = await this.getById({ id });
    const imagenProducto = await ImagenProducto.findByPk(
      producto.imagenProductoId
    );
    await cloudinaryService.delete({ public_id: imagenProducto.publicId });
    await producto.destroy();
    await imagenProducto.destroy();

    return "Producto eliminado correctamente";
  }
}

module.exports = new ProductoService();
