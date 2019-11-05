const assignmentService = require("../services/assignment.service");

module.exports = {
    create,
    getById,
    getPaginatedList,
    update,
    remove,
    getList,getCount,
    upload
};
function getList(req, res, next) {
    assignmentService.getList(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getCount(req, res, next) {
    assignmentService.getCount(function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function create(req, res, next) {
    assignmentService.create(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function update(req, res, next) {
    assignmentService.update(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function remove(req, res, next) {
    assignmentService.remove(req.params.id,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getPaginatedList(req, res, next) {
    assignmentService.getPaginatedList(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getById(req, res, next) {
    assignmentService.getById(req.params.id,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
  }
  function upload(req, res, next) {
    assignmentService.uploadHandler(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}