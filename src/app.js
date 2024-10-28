const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("@/middlewares/errorHandler");

const vendedorRoutes = require("@/routes/vendedorRoutes");
// import rutasDetalleVenta from "./routes/DetalleVenta.js";
// import rutasVenta from "./routes/Venta.js";
// import rutasCategoria from "./routes/Categoria.js";
// import rutasMarca from "./routes/Marca.js";
// import rutasProveedor from "./routes/Proveedor.js";
// import rutasCompra from "./routes/Compra.js";
// import rutasCliente from "./routes/Cliente.js";
// import rutasProducto from "./routes/Producto.js";
// import rutasImagenProducto from "./routes/ImagenProducto.js";
// import rutasDetalleCompra from "./routes/DetalleCompra.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/vendedores", vendedorRoutes);
// app.use("/api/categorias", rutasCategoria);
// app.use("/api/marcas", rutasMarca);
// app.use("/api/proveedores", rutasProveedor);
// app.use("/api/compras", rutasCompra);
// app.use("/api/clientes", rutasCliente);
// app.use("/api/ventas", rutasVenta);
// app.use("/api/detalleventas", rutasDetalleVenta);
// app.use("/api/productos", rutasProducto);
// app.use("/api/imagenproducto", rutasImagenProducto);
// app.use("/api/detallecompras", rutasDetalleCompra);

app.use(errorHandler);

module.exports = app;
