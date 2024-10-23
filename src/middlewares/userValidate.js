const {
  createValidation,
  updateValidation,
} = require("@/validations/userValidation");
const asyncHandler = require("@/middlewares/asyncHandler");

userValidateCreate = asyncHandler(async (req, res, next) => {
  const validationErrors = await createValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

userValidateUpdate = asyncHandler(async (req, res, next) => {
  const validationErrors = await updateValidation(req.body);
  if (validationErrors) {
    return next({ message: { errors: validationErrors }, statusCode: 400 });
  }

  next();
});

module.exports = { userValidateCreate, userValidateUpdate };
