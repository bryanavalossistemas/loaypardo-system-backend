const Rol = require("@/models/Rol");
const Usuario = require("@/models/Usuario");
const Administrador = require("@/models/Administrador");
const Vendedor = require("@/models/Vendedor");
// import Venta from "./Venta.js";
// import DetalleVenta from "./DetalleVenta.js";
// import Producto from "./Producto.js";
// import Cliente from "./Cliente.js";
// import Usuario from "./Usuario.js";
// import Proveedor from "./Proveedor.js";
// import Compra from "./Compra.js";
// import DetalleCompra from "./DetalleCompra.js";
// import Categoria from "./Categoria.js";
// import Marca from "./Marca.js";
// import ImagenProducto from "./ImagenProducto.js";

Rol.hasMany(Usuario, {
  as: "usuarios",
  foreignKey: "rolId",
  onDelete: "RESTRICT",
});
Usuario.belongsTo(Rol, {
  as: "rol",
  foreignKey: "rolId",
  onUpdate: "RESTRICT",
});

Usuario.hasOne(Administrador, {
  as: "administrador",
  foreignKey: "usuarioId",
  onDelete: "RESTRICT",
});
Administrador.belongsTo(Usuario, {
  as: "usuario",
  foreignKey: "usuarioId",
  onUpdate: "RESTRICT",
});

Usuario.hasOne(Vendedor, {
  as: "vendedor",
  foreignKey: "usuarioId",
  onDelete: "RESTRICT",
});
Vendedor.belongsTo(Usuario, {
  as: "usuario",
  foreignKey: "usuarioId",
  onUpdate: "RESTRICT",
});

// Cliente.hasMany(Venta, {
//   as: "ventas",
//   foreignKey: "clienteId",
// });
// Venta.belongsTo(Cliente, { as: "cliente", foreignKey: "clienteId" });

// Venta.hasMany(DetalleVenta, {
//   as: "detallesVenta",
//   foreignKey: "ventaId",
// });
// DetalleVenta.belongsTo(Venta, { as: "venta", foreignKey: "ventaId" });

// Producto.hasMany(DetalleVenta, {
//   as: "detallesVenta",
//   foreignKey: "productoId",
// });
// DetalleVenta.belongsTo(Producto, { as: "producto", foreignKey: "productoId" });

// Categoria.hasMany(Producto, {
//   as: "productos",
//   foreignKey: "categoriaId",
// });
// Producto.belongsTo(Categoria, {
//   as: "categoria",
//   foreignKey: "categoriaId",
// });

// Marca.hasMany(Producto, {
//   as: "productos",
//   foreignKey: "marcaId",
// });
// Producto.belongsTo(Marca, {
//   as: "marca",
//   foreignKey: "marcaId",
// });

// ImagenProducto.hasOne(Producto, {
//   as: "producto",
//   foreignKey: "imagenProductoId",
// });
// Producto.belongsTo(ImagenProducto, {
//   as: "imagenProducto",
//   foreignKey: "imagenProductoId",
// });

// Proveedor.hasMany(Compra, {
//   as: "compras",
//   foreignKey: "proveedorId",
// });
// Compra.belongsTo(Proveedor, {
//   foreignKey: "proveedorId",
//   as: "proveedor",
// });

// Compra.hasMany(DetalleCompra, {
//   as: "detallesCompra",
//   foreignKey: "compraId",
// });
// DetalleCompra.belongsTo(Compra, { as: "compra", foreignKey: "compraId" });

// Producto.hasMany(DetalleCompra, {
//   as: "detallesCompra",
//   foreignKey: "productoId",
// });
// DetalleCompra.belongsTo(Producto, { as: "producto", foreignKey: "productoId" });

module.exports = { Rol, Usuario, Administrador, Vendedor };
