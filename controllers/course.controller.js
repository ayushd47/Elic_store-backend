const courseService = require("../services/course.service");

module.exports = {
    create,
    getById,
    getPaginatedList,
    update,
    remove,
    getList,getCount,
    upload,
    getAll
};
function getList(req, res, next) {
    courseService.getList(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getAll(req, res, next) {
    courseService.getAll(function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getCount(req, res, next) {
    courseService.getCount(function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function create(req, res, next) {
    courseService.create(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function update(req, res, next) {
    courseService.update(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function remove(req, res, next) {
    courseService.remove(req.params.id,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getPaginatedList(req, res, next) {
    courseService.getPaginatedList(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}
function getById(req, res, next) {
    courseService.getById(req.params.id,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
  }
  function upload(req, res, next) {
    courseService.uploadHandler(req,function(err,result){
        if(err)
            next(err);
        else 
            res.json(result);
    });
}