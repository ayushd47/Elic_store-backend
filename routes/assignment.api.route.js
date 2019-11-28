const assignmentController = require("../controllers/assignment.controller");

module.exports = function(app) {
  app.get("/api/v1/assignments", assignmentController.getList),
    app.post("/api/v1/assignments", assignmentController.create),
    app.patch("/api/v1/assignments", assignmentController.update),
    app.get("/api/v1/assignments/:id", assignmentController.getById);
  app.delete("/api/v1/assignments/:id", assignmentController.remove);

  app.post("/api/v1/assignments/upload", assignmentController.upload),
    app.get("/api/v1/student/assignments", assignmentController.getList);
};
