const SchemaValidator = require("../middlewares/validation");

const userController = require("../controllers/user.controller");

// We are using the formatted Joi Validation error
// Pass false as argument to use a generic error
const validateRequest = SchemaValidator(true);

module.exports = function(app) {
  app.get('/api/v1/setup/users', userController.getPaginatedList),
  app.post('/api/v1/setup/users', validateRequest, userController.create),
  app.patch('/api/v1/setup/users', validateRequest, userController.update),
  app.get('/api/v1/setup/users/:id', userController.getById),
  app.delete('/api/v1/setup/users/:id', userController.remove),
  app.post('/api/v1/public/student/register', validateRequest, userController.registerstudent)
}
