const createValidation = async (rol) => {
  const errors = [];

  if (rol.nombre === undefined) {
    errors.push({
      message: "El nombre del rol es requerido.",
      field: "nombre",
    });
  } else if (typeof rol.nombre !== "string") {
    errors.push({
      message: "El nombre del rol debe ser una cadena.",
      field: "nombre",
    });
  } else if (rol.nombre.trim() === "") {
    errors.push({
      message: "El nombre del rol no puede ser una cadena vacía.",
      field: "nombre",
    });
  }

  return errors.length > 0 ? errors : null;
};

const updateValidation = async (rol) => {
  const errors = [];

  if (rol.nombre !== undefined) {
    if (typeof rol.nombre !== "string") {
      errors.push({
        message: "El nombre del rol debe ser una cadena.",
        field: "nombre",
      });
    } else if (rol.nombre.trim() === "") {
      errors.push({
        message: "El nombre del rol es requerido.",
        field: "nombre",
      });
    }
  }

  return errors.length > 0 ? errors : null;
};

module.exports = { createValidation, updateValidation };
