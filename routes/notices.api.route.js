const noticeController = require("../controllers/notice.controller");

module.exports = function(app) {
  app.get("/api/v1/notices", noticeController.getList),
    app.post("/api/v1/notices", noticeController.create),
    app.patch("/api/v1/notices", noticeController.update),
    app.get("/api/v1/notices/:id", noticeController.getById);
  app.delete("/api/v1/notices/:id", noticeController.remove);

  app.post("/api/v1/notices/upload", noticeController.upload),
    app.get("/api/v1/student/notices", noticeController.getList);
};
