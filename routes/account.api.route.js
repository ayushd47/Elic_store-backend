const SchemaValidator = require("../middlewares/validation");

const userController = require("../controllers/user.controller");

// We are using the formatted Joi Validation error
// Pass false as argument to use a generic error
const validateRequest = SchemaValidator(true);

module.exports = function(app) {
  app.post(
    "/api/v1/account/login",
    validateRequest,
    userController.authenticate
  ),
    app.post(
      "/api/v1/public/login",
      validateRequest,
      userController.studentlogin
    );
};
