const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Error de servidor";

  if (message.errors) {
    return res.status(statusCode).json({
      success: false,
      errors: message.errors,
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
