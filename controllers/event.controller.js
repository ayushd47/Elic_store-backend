const eventService = require("../services/event.service");

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
  eventService.getList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getCount(req, res, next) {
  eventService.getCount(function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function create(req, res, next) {
  eventService.create(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function update(req, res, next) {
  eventService.update(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function remove(req, res, next) {
  eventService.remove(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getPaginatedList(req, res, next) {
  eventService.getPaginatedList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getById(req, res, next) {
  eventService.getById(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function upload(req, res, next) {
  eventService.uploadHandler(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
