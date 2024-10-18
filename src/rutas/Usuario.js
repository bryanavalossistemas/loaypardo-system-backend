import express from "express";
import ControladorUsuario from "../controladores/Usuario.js";
import { authenticate } from "../middlewares/Middleware.js";

const router = express.Router();

router.post("/", ControladorUsuario.crearUsuario);
router.get("/", ControladorUsuario.obtenerUsuarios);
router.get("/usuario", authenticate, ControladorUsuario.obtenerUsuario);
router.get("/:id", ControladorUsuario.obtenerUsuarioPorId);
router.put("/:id", ControladorUsuario.actualizarUsuario);
router.delete("/:id", ControladorUsuario.eliminarUsuario);
router.post("/iniciarSesion", ControladorUsuario.iniciarSesion);

export default router;
