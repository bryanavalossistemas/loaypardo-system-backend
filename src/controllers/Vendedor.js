import servicioVendedor from "../services/Vendedor.js";

class ControladorVendedor {
  static async crearVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, dni, telefono, celular, correo } =
        req.body;
      const nuevoVendedor = await servicioVendedor.crearVendedor(
        nombre,
        usuario,
        contrasenia,
        dni,
        telefono,
        celular,
        correo
      );
      res.status(201).json(nuevoVendedor);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  static async obtenerVendedores(req, res) {
    try {
      const vendedores = await servicioVendedor.obtenerVendedores();
      res.json(vendedores);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  }

  static async eliminarVendedor(req, res) {
    try {
      const categoriaEliminada = await servicioVendedor.eliminarVendedor(
        req.params.id
      );
      res.json(categoriaEliminada);
    } catch (error) {
      res.status(404).json({ mensaje: error.message });
    }
  }

  static async actualizarVendedor(req, res) {
    try {
      const { nombre, usuario, contrasenia, dni, telefono, celular, correo } =
        req.body;
      const VendedorActualizado = await servicioVendedor.actualizarVendedor(
        req.params.id,
        nombre,
        usuario,
        contrasenia,
        dni,
        telefono,
        celular,
        correo
      );
      res.json(VendedorActualizado);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  static async obtenerVendedorPorUsuarioId(req, res) {
    try {
      const vendedor = await servicioVendedor.obtenerVendedorPorUsuarioId(
        req.params.id
      );
      res.json(vendedor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async obtenerVendedorPorDNI(req, res) {
    try {
      const vendedor = await servicioVendedor.obtenerVendedorPorDNI(
        req.params.dni
      );
      res.json(vendedor);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default ControladorVendedor;
