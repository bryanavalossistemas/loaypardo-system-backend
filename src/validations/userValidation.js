const { Role } = require("@/models");

const createValidation = async (user) => {
  const errors = [];

  if (user.name === undefined) {
    errors.push({
      message: "El nombre del usuario es requerido.",
      field: "name",
    });
  } else if (typeof user.name !== "string") {
    errors.push({
      message: "El nombre del usuario debe ser una cadena.",
      field: "name",
    });
  } else if (user.name.trim() === "") {
    errors.push({
      message: "El nombre del usuario no puede ser una cadena vacía",
      field: "name",
    });
  }

  if (user.username === undefined) {
    errors.push({
      message: "El nombre de usuario es requerido.",
      field: "username",
    });
  } else if (typeof user.username !== "string") {
    errors.push({
      message: "El nombre de usuario debe ser una cadena.",
      field: "username",
    });
  } else if (user.username.trim() === "") {
    errors.push({
      message: "El nombre de usuario no puede ser una cadena vacía.",
      field: "username",
    });
  }

  if (user.password === undefined) {
    errors.push({
      message: "La contraseña del usuario es requerido.",
      field: "password",
    });
  } else if (typeof user.password !== "string") {
    errors.push({
      message: "La contraseña del usuario debe ser una cadena.",
      field: "password",
    });
  } else if (user.password.trim() === "") {
    errors.push({
      message: "La contraseña del usuario no puede ser una cadena vacía.",
      field: "password",
    });
  }

  if (user.roleId === undefined) {
    errors.push({
      message: "El id del rol del usuario es requerido.",
      field: "roleId",
    });
  } else if (!Number.isInteger(user.roleId)) {
    errors.push({
      message: "El id del rol del usuario debe ser un número entero.",
      field: "roleId",
    });
  } else if (user.roleId < 1) {
    errors.push({
      message: "El id del rol del usuario debe ser un número positivo",
      field: "roleId",
    });
  }

  return errors.length > 0 ? errors : null;
};

const updateValidation = async (user) => {
  const errors = [];

  if (user.name !== undefined) {
    if (typeof user.name !== "string") {
      errors.push({
        message: "El nombre del usuario debe ser una cadena.",
        field: "name",
      });
    } else if (user.name.trim() === "") {
      errors.push({
        message: "El nombre del usuario es requerido.",
        field: "name",
      });
    }
  }

  if (user.username !== undefined) {
    if (typeof user.username !== "string") {
      errors.push({
        message: "El nombre de usuario del usuario debe ser una cadena.",
        field: "username",
      });
    } else if (user.username.trim() === "") {
      errors.push({
        message: "El nombre de usuario del usuario es requerido.",
        field: "username",
      });
    }
  }

  if (user.password !== undefined) {
    if (typeof user.password !== "string") {
      errors.push({
        message: "La contraseña del usuario debe ser una cadena.",
        field: "password",
      });
    } else if (user.password.trim() === "") {
      errors.push({
        message: "La contraseña del usuario es requerido.",
        field: "password",
      });
    }
  }

  if (user.roleId !== undefined) {
    if (!Number.isInteger(user.roleId)) {
      errors.push({
        message: "El id del rol del usuario debe ser un número entero.",
        field: "roleId",
      });
    } else if (user.roleId < 1) {
      errors.push({
        message: "El id del rol del usuario debe ser un número positivo",
        field: "roleId",
      });
    }
  }

  return errors.length > 0 ? errors : null;
};

module.exports = { createValidation, updateValidation };
