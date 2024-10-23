import jwt from "jsonwebtoken";
import ModeloUsuario from "../models/User.js";

export const authenticate = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) {
      throw new Error("No estás autenticado");
    }

    const [, token] = bearer.split(" ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "object" && decoded.id) {
      const user = await ModeloUsuario.findByPk(decoded.id);
      if (!user) {
        throw new Error("No estás autenticado");
      }
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(401).json({ mensaje: error.message });
  }
};

export const authorize = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "ADMIN") {
      throw new Error("No estás autorizado");
    }
    next();
  } catch (error) {
    res.status(403).json({ mensaje: error.message });
  }
};
