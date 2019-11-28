const courseSubjectService = require("../services/course-subject.service");

module.exports = {
  create,
  getById,
  getPaginatedList,
  update,
  remove,
  getList,
  getCount,
  getAll
};
function getList(req, res, next) {
  courseSubjectService.getList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getAll(req, res, next) {
  courseSubjectService.getAll(function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getCount(req, res, next) {
  courseSubjectService.getCount(function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function create(req, res, next) {
  courseSubjectService.create(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function update(req, res, next) {
  courseSubjectService.update(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function remove(req, res, next) {
  courseSubjectService.remove(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getPaginatedList(req, res, next) {
  courseSubjectService.getPaginatedList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getById(req, res, next) {
  courseSubjectService.getById(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
