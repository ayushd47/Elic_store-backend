
const courseController = require("../controllers/course.controller");



module.exports = function(app) {
  app.get('/api/v1/courses', courseController.getList),
  app.post('/api/v1/courses', courseController.create),
  app.patch('/api/v1/courses', courseController.update),
  app.get('/api/v1/courses/:id', courseController.getById)
  app.delete('/api/v1/courses/:id', courseController.remove)

  app.post('/api/v1/courses/upload', courseController.upload),
  app.get('/api/v1/public/courses', courseController.getList)

}


