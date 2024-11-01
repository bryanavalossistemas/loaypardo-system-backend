const existImageFile = (req, res, next) => {
  if (!req.file) {
    return next({
      statusCode: 400,
      message: "Error de validación",
      errors: [{ message: "No se ha subido ninguna imagen", path: "imagen" }],
    });
  }

  const fileType = req.file.mimetype.split("/")[0];
  if (fileType !== "image") {
    return next({
      statusCode: 400,
      message: "Error de validación",
      errors: [
        { message: "El archivo subido no es una imagen", path: "imagen" },
      ],
    });
  }

  next();
};

const isImageFile = (req, res, next) => {
  if (req.file) {
    const fileType = req.file.mimetype.split("/")[0];
    if (fileType !== "image") {
      return next({
        statusCode: 400,
        message: "Error de validación",
        errors: [
          { message: "El archivo subido no es una imagen", path: "imagen" },
        ],
      });
    }
  }

  next();
};

module.exports = { existImageFile, isImageFile };
