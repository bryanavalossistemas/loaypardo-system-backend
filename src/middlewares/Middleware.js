import jwt from "jsonwebtoken";
import ModeloUsuario from "../modelos/Usuario.js";
import dotenv from "dotenv";
dotenv.config();

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
    res.status(500).json({ mensaje: error.message });
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
    res.status(500).json({ mensaje: error.message });
  }
};

export const transformarCadenasVacias = (req, res, next) => {
  const transform = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === "") {
          obj[key] = null; // Reemplazar cadena vacía con null
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          transform(obj[key]); // Llamada recursiva si es un objeto
        }
      }
    }
  };

  transform(req.body);
  next();
};
