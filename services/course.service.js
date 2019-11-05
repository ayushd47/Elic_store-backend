const sql = require('../shared/db');
const uuidv1 = require('uuid/v1')
const path =require('path');
const multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads/course/')
    },
    filename: (req, file, cb) => {
       console.log(file.originalname);
       console.log(file.fieldname);
      let ext=path.extname(file.originalname);
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
});
var upload = multer({storage: storage}).single('File');
module.exports = {
    create,
    getById,    
    update,
    remove,
    getList,
    getAll,
    uploadHandler
}
async function create(req,result){
    let course = {Id: uuidv1(),Name : req.body.Name,Duration:req.body.Duration,File:req.body.File}
    sql.query("INSERT INTO `course` SET ?", course, function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,null);
        }
    });
}
async function getById(id,result) {
    sql.query("select Id,Name,Duration,File from course where id = ? ", id, function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            if(data.length < 1)  { 
                result(null,null);
            }
            else{   
                result(null,data[0]);           
            }
        }
    });
}
async function remove(id,result) {
    sql.query("delete from course where id = ? ", id, function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,null);
        }
    });
}
async function update(req,result) {
    sql.query("update course set Name=?,Duration=?,File=? where Id = ? ", [req.body.Name,req.body.Duration,req.body.File,req.body.Id], function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,null);
        }
    });
}


async function getList(req,result) {
    let pagesize = parseInt(req.query.pagesize),skip =parseInt(req.query.skip);
    sql.query("select SQL_CALC_FOUND_ROWS Id, Name,Duration,File from course LIMIT ?, ?;SELECT FOUND_ROWS() as total;",[skip,pagesize], function (err, response) {             
       
        if(err) {
            result(err, null);
        }
        else{
            result(null,{
                data : response[0],
                count : response[1][0].total
            });
        }
    });
}

async function getAll(result) {
    sql.query("select Id,Name from course", function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,data);
        }
    });
}

function uploadHandler(req,result){
    upload(req,result,function(err) {
        if(err) {
            return result(err,"Error uploading file.");
        }
        console.log(req.file);
        result(null,req.file);

      
    });
}