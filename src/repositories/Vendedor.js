import RepositorioBase from "./Base.js";
import { Vendedor, Usuario } from "../models/index.js";

class RepositorioVendedor extends RepositorioBase {
  constructor() {
    super(Vendedor);
  }

  obtenerTodos = async () => {
    try {
      const vendedores = await this.model.findAll({
        include: [{ model: Usuario, as: "usuario" }],
        order: [["id", "DESC"]],
      });

      return vendedores.map((vendedor) => {
        return {
          id: vendedor.id,
          nombre: vendedor.usuario.nombre,
          usuario: vendedor.usuario.usuario,
          contrasenia: vendedor.usuario.contrasenia,
          dni: vendedor.dni,
          telefono: vendedor.telefono,
          celular: vendedor.celular,
          correo: vendedor.correo,
        };
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener elementos: ${error.message}`
      );
    }
  };

  obtenerPorUsuarioId = async (usuarioId) => {
    try {
      return await this.model.findOne({ where: { usuarioId } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el vendedor con usuarioId: ${usuarioId}: ${error.message}`
      );
    }
  };

  obtenerPorDNI = async (dni) => {
    try {
      return await this.model.findOne({ where: { dni } });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el vendedor con DNI: ${dni}: ${error.message}`
      );
    }
  };
}

const repositorioVendedor = new RepositorioVendedor();

export default repositorioVendedor;
