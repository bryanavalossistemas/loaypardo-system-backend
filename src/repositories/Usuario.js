import RepositorioBase from "./Base.js";
import { Usuario, Vendedor } from "../models/index.js";

class RepositorioUsuario extends RepositorioBase {
  constructor() {
    super(Usuario);
  }

  // obtenerPorUsuarioSinVendedor = async (usuario) => {
  //   try {
  //     return await this.model.findOne({
  //       where: { usuario },
  //     });
  //   } catch (error) {
  //     throw new Error(
  //       `Error de Base de datos: error al obtener el usuario con usuario: ${usuario}: ${error.message}`
  //     );
  //   }
  // };

  obtenerPorUsuario = async (usuario) => {
    try {
      return await this.model.findOne({
        where: { usuario },
      });
    } catch (error) {
      throw new Error(
        `Error de Base de datos: error al obtener el usuario con usuario: ${usuario}: ${error.message}`
      );
    }
  };
}

const repositorioUsuario = new RepositorioUsuario();

export default repositorioUsuario;