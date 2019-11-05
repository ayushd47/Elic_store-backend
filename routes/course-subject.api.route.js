
const courseSubjectController = require("../controllers/course-subject.controller");



module.exports = function(app) {
  app.get('/api/v1/subjects', courseSubjectController.getList),
  app.post('/api/v1/subjects', courseSubjectController.create),
  app.patch('/api/v1/subjects', courseSubjectController.update),
  app.get('/api/v1/subjects/:id', courseSubjectController.getById)
  app.delete('/api/v1/subjects/:id', courseSubjectController.remove)
}


