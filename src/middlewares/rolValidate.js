const {
  createValidation,
  updateValidation,
} = require("@/validations/rolValidation");
const asyncHandler = require("@/middlewares/asyncHandler");

rolValidateCreate = asyncHandler(async (req, res, next) => {
  const validationErrors = await createValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

rolValidateUpdate = asyncHandler(async (req, res, next) => {
  const validationErrors = await updateValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

module.exports = { rolValidateCreate, rolValidateUpdate };
