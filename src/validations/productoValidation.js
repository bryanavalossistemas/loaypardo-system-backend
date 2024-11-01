const { body } = require("express-validator");

const createValidation = [
  body("nombre")
    .exists()
    .withMessage("El nombre es requerido.")
    .isString()
    .withMessage("El nombre debe ser una cadena.")
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede ser una cadena vacía."),
  body("precioCosto")
    .exists()
    .withMessage("El precio de costo es requerido.")
    .isFloat({ min: 0.01 })
    .withMessage("El precio de costo debe ser un número decimal mayor a 0.")
    .toFloat(),
  body("precioVenta")
    .exists()
    .withMessage("El precio de venta es requerido.")
    .isFloat({ min: 0.01 })
    .withMessage("El precio de venta debe ser un número decimal mayor a 0.")
    .toFloat(),
  body("stock")
    .exists()
    .withMessage("El stock es requerido.")
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número entero no negativo")
    .toInt(),
  body("categoriaId")
    .exists()
    .withMessage("El ID de la categoría es requerido.")
    .isInt({ min: 1 })
    .withMessage("El ID de la categoría debe ser un número entero mayor a 0")
    .toInt(),
  body("marcaId")
    .exists()
    .withMessage("El ID de la marca es requerido.")
    .isInt({ min: 1 })
    .withMessage("El ID de la marca debe ser un número entero mayor a 0")
    .toInt(),
];

const updateValidation = [
  body("nombre")
    .optional()
    .isString()
    .withMessage("El nombre debe ser una cadena.")
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede ser una cadena vacía."),
  body("precioCosto")
    .optional()
    .isFloat({ min: 0.01 })
    .withMessage("El precio de costo debe ser un número decimal mayor a 0.")
    .toFloat(),
  body("precioVenta")
    .optional()
    .isFloat({ min: 0.01 })
    .withMessage("El precio de venta debe ser un número decimal mayor a 0.")
    .toFloat(),
  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("El stock debe ser un número entero no negativo")
    .toInt(),
  body("categoriaId")
    .optional()
    .isInt({ min: 1 })
    .withMessage("El ID de la categoría debe ser un número entero mayor a 0")
    .toInt(),
  body("marcaId")
    .optional()
    .isInt({ min: 1 })
    .withMessage("El ID de la marca debe ser un número entero mayor a 0")
    .toInt(),
];

module.exports = { createValidation, updateValidation };
