const eventController = require("../controllers/event.controller");

module.exports = function(app) {
  app.get("/api/v1/events", eventController.getList),
    app.post("/api/v1/events", eventController.create),
    app.patch("/api/v1/events", eventController.update),
    app.get("/api/v1/events/:id", eventController.getById);
  app.delete("/api/v1/events/:id", eventController.remove);

  app.post("/api/v1/events/upload", eventController.upload),
    app.get("/api/v1/student/events", eventController.getList);
};
