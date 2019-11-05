const roleController = require("../controllers/role.controller");
const courseController = require("../controllers/course.controller");
const courseSubjectController = require("../controllers/course-subject.controller");

module.exports = function(app) {
  app.get('/api/v1/list/role', roleController.getList),
  app.get('/api/v1/list/course', courseController.getAll),
  app.get('/api/v1/list/subject', courseSubjectController.getAll)
}
