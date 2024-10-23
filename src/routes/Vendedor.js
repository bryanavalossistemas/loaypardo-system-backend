import express from "express";
import ControladorVendedor from "../controllers/Vendedor.js";

const router = express.Router();

router.post("/", ControladorVendedor.crearVendedor);
router.get("/", ControladorVendedor.obtenerVendedores);
router.put("/:id", ControladorVendedor.actualizarVendedor);
router.get("/usuario/:id", ControladorVendedor.obtenerVendedorPorUsuarioId);
router.get("/dni/:dni", ControladorVendedor.obtenerVendedorPorDNI);
router.delete("/:id", ControladorVendedor.eliminarVendedor);

export default router;
