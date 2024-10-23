
import repositorioDetalleCompra from "../repositories/DetalleCompra.js";
import repositorioCompra from "../repositories/Compra.js"
import repositorioProducto from "../repositories/Producto.js"


class ServicioDetalleCompra {
  async crearDetalleCompra(cantidad, monto, compraId, productoId) {
    try {
     

      const compra = await repositorioCompra.obtenerPorId(compraId);
      const producto = await repositorioProducto.obtenerPorId(productoId);
      if(! compra){
        throw new Error('la compra no existe');
      }

      if(!producto){
        throw new Error('el producto no existe');
      }

      const nuevoDetalleCompra = { cantidad, monto, compraId, productoId };
      return await repositorioDetalleCompra.agregar(nuevoDetalleCompra); 


    } catch (error) {
      throw new Error(`Error al crear el detalle de la compra: ${error.message}`);
    }
  }

  async obtenerDetalleCompras() {
    try {
      return await repositorioDetalleCompra.obtenerTodos();
    } catch (error) {
      throw new Error(`Error al obtener los detalles de las compras: ${error.message}`);
    }
  }

  async obtenerDetalleCompraPorId(id) {
    try {
      const detalleCompra = await repositorioDetalleCompra.obtenerPorId(id);
      if (!detalleCompra) throw new Error("detalle de compra no encontrado");
      return detalleCompra;
    } catch (error) {
      throw new Error(
        `Error al obtener el detalle de la compra con ID ${id}: ${error.message}`
      );
    }
  }

  async actualizarDetalleCompra(id, cantidad, monto, compraId, productoId) {
    try {
      const compra = await repositorioCompra.obtenerPorId(compraId);
      const producto = await repositorioProducto.obtenerPorId(productoId);
      if(! compra){
        throw new Error('la compra no existe');
      }

      if(!producto){
        throw new Error('el producto no existe');
      }


      const datosActualizados = { cantidad, monto, compraId, productoId };
      return await repositorioDetalleCompra.actualizar(id, datosActualizados);
    } catch (error) {
      throw new Error(
        `Error al actualizar el detalle de la compra con ID ${id}: ${error.message}`
      );
    }
  }

}

const servicioDetalleCompra = new ServicioDetalleCompra();

export default servicioDetalleCompra;
