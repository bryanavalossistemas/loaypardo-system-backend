const {
  createValidation,
  updateValidation,
} = require("@/validations/administratorValidation");
const asyncHandler = require("@/middlewares/asyncHandler");

administratorValidateCreate = asyncHandler(async (req, res, next) => {
  const validationErrors = await createValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

administratorValidateUpdate = asyncHandler(async (req, res, next) => {
  const validationErrors = await updateValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

module.exports = { administratorValidateCreate, administratorValidateUpdate };
