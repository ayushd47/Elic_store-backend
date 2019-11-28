const galleryController = require("../controllers/gallery.controller");

module.exports = function(app) {
  app.get("/api/v1/galleries", galleryController.getList),
    app.post("/api/v1/galleries", galleryController.create),
    app.patch("/api/v1/galleries", galleryController.update),
    app.get("/api/v1/galleries/:id", galleryController.getById);
  app.delete("/api/v1/galleries/:id", galleryController.remove);

  app.post("/api/v1/galleries/upload", galleryController.upload),
    app.get("/api/v1/public/galleries", galleryController.getList);
};
