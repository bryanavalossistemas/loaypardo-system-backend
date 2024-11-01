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
  body("dni")
    .exists()
    .withMessage("El dni es requerido.")
    .isString()
    .withMessage("El dni debe ser una cadena.")
    .matches(/^\d{8}$/)
    .withMessage(
      "El dni debe ser una cadena con exactamente 8 dígitos numéricos."
    ),
  body("direccion")
    .optional()
    .isString()
    .withMessage("La dirección debe ser una cadena.")
    .trim()
    .notEmpty()
    .withMessage("La dirección no puede ser una cadena vacía."),
  body("celular")
    .optional()
    .isString()
    .withMessage("El celular debe ser una cadena.")
    .matches(/^\d{9}$/)
    .withMessage(
      "El celular debe ser una cadena con exactamente 9 dígitos numéricos."
    ),
  body("correo").optional().isEmail().withMessage("El correo no es válido."),
];

const updateValidation = [
  body("nombre")
    .optional()
    .isString()
    .withMessage("El nombre debe ser una cadena.")
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede ser una cadena vacía."),
  body("dni")
    .optional()
    .isString()
    .withMessage("El dni debe ser una cadena.")
    .matches(/^\d{8}$/)
    .withMessage(
      "El dni debe ser una cadena con exactamente 8 dígitos numéricos."
    ),
  body("direccion")
    .optional()
    .isString()
    .withMessage("La dirección debe ser una cadena.")
    .trim()
    .notEmpty()
    .withMessage("La dirección no puede ser una cadena vacía."),
  body("celular")
    .optional()
    .isString()
    .withMessage("El celular debe ser una cadena.")
    .matches(/^\d{9}$/)
    .withMessage(
      "El celular debe ser una cadena con exactamente 9 dígitos numéricos."
    ),
  body("correo").optional().isEmail().withMessage("El correo no es válido."),
];

module.exports = { createValidation, updateValidation };
