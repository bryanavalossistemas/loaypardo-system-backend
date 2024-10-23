const createValidation = async (administrator) => {
  const errors = [];

  if (administrator.name === undefined) {
    errors.push({
      message: "El nombre del administrador es requerido.",
      field: "name",
    });
  } else if (typeof administrator.name !== "string") {
    errors.push({
      message: "El nombre del administrador debe ser una cadena.",
      field: "name",
    });
  } else if (administrator.name.trim() === "") {
    errors.push({
      message: "El nombre del administrador no puede ser una cadena vacía.",
      field: "name",
    });
  }

  if (administrator.username === undefined) {
    errors.push({
      message: "El nombre de usuario del administrador es requerido.",
      field: "username",
    });
  } else if (typeof administrator.username !== "string") {
    errors.push({
      message: "El nombre de usuario del administrador debe ser una cadena.",
      field: "username",
    });
  } else if (administrator.username.trim() === "") {
    errors.push({
      message:
        "El nombre de usuario del administrador no puede ser una cadena vacía.",
      field: "username",
    });
  }

  if (administrator.password === undefined) {
    errors.push({
      message: "La contraseña del administrador es requerida.",
      field: "password",
    });
  } else if (typeof administrator.password !== "string") {
    errors.push({
      message: "La contraseña del administrador debe ser una cadena.",
      field: "password",
    });
  } else if (administrator.password.trim() === "") {
    errors.push({
      message: "La contraseña del administrador no puede ser una cadena vacía.",
      field: "password",
    });
  }

  return errors.length > 0 ? errors : null;
};

const updateValidation = async (administrator) => {
  const errors = [];

  if (administrator.name !== undefined) {
    if (typeof administrator.name !== "string") {
      errors.push({
        message: "El nombre del administrador debe ser una cadena.",
        field: "name",
      });
    } else if (administrator.name.trim() === "") {
      errors.push({
        message: "El nombre del administrador no puede ser una cadena vacía.",
        field: "name",
      });
    }
  }

  if (administrator.username !== undefined) {
    if (typeof administrator.username !== "string") {
      errors.push({
        message: "El nombre de usuario del administrador debe ser una cadena.",
        field: "username",
      });
    } else if (administrator.username.trim() === "") {
      errors.push({
        message:
          "El nombre de usuario del administrador no puede ser una cadena vacía.",
        field: "username",
      });
    }
  }

  if (administrator.password !== undefined) {
    if (typeof administrator.password !== "string") {
      errors.push({
        message: "La contraseña del administrador debe ser una cadena.",
        field: "password",
      });
    } else if (administrator.password.trim() === "") {
      errors.push({
        message:
          "La contraseña del administrador no puede ser una cadena vacía.",
        field: "password",
      });
    }
  }

  return errors.length > 0 ? errors : null;
};

module.exports = { createValidation, updateValidation };
