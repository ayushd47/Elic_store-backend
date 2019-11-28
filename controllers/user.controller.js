const userService = require("../services/user.service");
const config = require("../shared/config");

module.exports = {
  authenticate,
  studentlogin,
  create,
  getById,
  getPaginatedList,
  update,
  remove,
  registerstudent
};

function authenticate(req, res, next) {
  req.RoleId = config.adminroleid;
  userService.authenticate(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function studentlogin(req, res, next) {
  req.RoleId = config.studentroleid;
  userService.authenticate(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function create(req, res, next) {
  userService.create(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function update(req, res, next) {
  userService.update(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function remove(req, res, next) {
  userService.remove(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getPaginatedList(req, res, next) {
  userService.getPaginatedList(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function getById(req, res, next) {
  userService.getById(req.params.id, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
function registerstudent(req, res, next) {
  userService.registerstudent(req, function(err, result) {
    if (err) next(err);
    else res.json(result);
  });
}
