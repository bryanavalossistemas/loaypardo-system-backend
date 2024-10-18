import repositorioVendedor from "../repositorios/Vendedor.js";
import repositorioUsuario from "../repositorios/Usuario.js";

class ServicioVendedor {
  async crearVendedor(
    nombre,
    usuario,
    contrasenia,
    dni,
    telefono,
    celular,
    correo
  ) {
    try {
      const usuarioExiste = await repositorioUsuario.obtenerPorUsuario(usuario);
      if (usuarioExiste) {
        throw new Error(`Ya existe un vendedor con usuario: ${usuario}`);
      }
      const vendedorConDniExiste = await repositorioVendedor.obtenerPorDNI(dni);
      if (vendedorConDniExiste) {
        throw new Error(`Ya existe un vendedor con dni:  ${dni}`);
      }
      const nuevoUsuario = {
        nombre,
        usuario,
        contrasenia,
        rolId: 2,
      };
      const usuarioCreado = await repositorioUsuario.agregar(nuevoUsuario);
      const nuevoVendedor = {
        dni,
        telefono,
        celular,
        correo,
        usuarioId: usuarioCreado.id,
      };
      await repositorioVendedor.agregar(nuevoVendedor);
      return "Vendedor creado correctamente";
    } catch (error) {
      throw new Error(`Error al crear el vendedor: ${error.message}`);
    }
  }

  async obtenerVendedores() {
    try {
      return await repositorioVendedor.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los vendedores: ${error.message}`);
    }
  }

  async actualizarVendedor(
    id,
    nombre,
    usuario,
    contrasenia,
    dni,
    telefono,
    celular,
    correo
  ) {
    try {
      const usuarioExiste = await repositorioUsuario.obtenerPorUsuario(usuario);
      if (usuarioExiste && usuarioExiste.vendedor.id != id) {
        throw new Error(`Ya existe un usuario con usuario: ${usuario}`);
      }
      const vendedorConDniExiste = await repositorioVendedor.obtenerPorDNI(dni);
      if (vendedorConDniExiste && vendedorConDniExiste.id != id) {
        throw new Error(`Ya existe un vendedor con dni:  ${dni}`);
      }
      const vendedorConCelularExiste =
        await repositorioVendedor.obtenerPorCelular(celular);
      if (vendedorConCelularExiste && vendedorConCelularExiste.id != id) {
        throw new Error(`Ya existe un vendedor con celular:  ${celular}`);
      }
      const datosActualizados = {
        nombre,
        usuario,
        contrasenia,
        dni,
        telefono,
        celular,
        correo,
      };
      const vendedorActualizado = await repositorioVendedor.actualizar(
        id,
        datosActualizados
      );
      return {
        ok: true,
        message: vendedorActualizado,
      };
    } catch (error) {
      throw new Error(`Error al actualizar el vendedor: ${error.message}`);
    }
  }

  async obtenerVendedorPorUsuarioId(usuarioId) {
    try {
      const vendedor = await repositorioVendedor.obtenerPorUsuarioId(usuarioId);
      if (!vendedor) throw new Error("Vendedor no encontrado");
      return vendedor;
    } catch (error) {
      throw new Error(
        `Error al obtener el vendedor con el usuario con ID ${id}: ${error.message}`
      );
    }
  }

  async obtenerVendedorPorDNI(dni) {
    try {
      const vendedor = await repositorioVendedor.obtenerPorDNI(dni);
      if (!vendedor) throw new Error("Vendedor no encontrado");
      return vendedor;
    } catch (error) {
      throw new Error(
        `Error al obtener el vendedor con el DNI: ${dni}: ${error.message}`
      );
    }
  }
}

const servicioVendedor = new ServicioVendedor();

export default servicioVendedor;
