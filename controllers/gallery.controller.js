const galleryService = require("../services/gallery.service");

module.exports = {
  create,
  getById,
  getPaginatedList,
  update,
  remove,
  getList,
  getCount,
  upload
};
function getList(req, res, next) {
  galleryService.getList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getCount(req, res, next) {
  galleryService.getCount(function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function create(req, res, next) {
  galleryService.create(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function update(req, res, next) {
  galleryService.update(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function remove(req, res, next) {
  galleryService.remove(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getPaginatedList(req, res, next) {
  galleryService.getPaginatedList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getById(req, res, next) {
  galleryService.getById(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function upload(req, res, next) {
  galleryService.uploadHandler(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
