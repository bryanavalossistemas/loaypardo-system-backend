const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorHandler = require("@/middlewares/errorHandler");

const vendedorRoutes = require("@/routes/vendedorRoutes");
const clienteRoutes = require("@/routes/ClienteRoutes");
const clienteJuridicoRoutes = require("@/routes/ClienteJuridicoRoutes");
const clienteNaturalRoutes = require("@/routes/ClienteNaturalRoutes");
const proveedorRoutes = require("@/routes/ProveedorRoutes");
const categoriaRoutes = require("@/routes/CategoriaRoutes");
const marcaRoutes = require("@/routes/MarcaRoutes");
const productoRoutes = require("@/routes/ProductoRoutes");
const compraRoutes = require("@/routes/CompraRoutes");
const ventaRoutes = require("@/routes/VentaRoutes");
const authRoutes = require("@/routes/AuthRoutes");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/vendedores", vendedorRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/clientesJuridicos", clienteJuridicoRoutes);
app.use("/api/clientesNaturales", clienteNaturalRoutes);
app.use("/api/proveedores", proveedorRoutes);
app.use("/api/categorias", categoriaRoutes);
app.use("/api/marcas", marcaRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/compras", compraRoutes);
app.use("/api/ventas", ventaRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

module.exports = app;
