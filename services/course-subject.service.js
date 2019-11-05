const sql = require('../shared/db');
const uuidv1 = require('uuid/v1')
module.exports = {
    create,
    getById,    
    update,
    remove,
    getList,
    getAll
}
async function create(req,result){
    let course_subject = {Id: uuidv1(),CourseId:req.body.CourseId,SubjectName:req.body.SubjectName,SubjectCode:req.body.SubjectCode,Year:req.body.Year,Semister:req.body.Semister}
    sql.query("INSERT INTO `course_subject` SET ?", course_subject, function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,null);
        }
    });
}
async function getById(id,result) {
    sql.query("select course_subject.*,course_subject.Id as Id,course.*,course.Id as cid from course_subject left join course on course_subject.CourseId=course.Id where course_subject.id = ? ", id, function (err, data) {             
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
    sql.query("delete from course_subject where id = ? ", id, function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,null);
        }
    });
}
async function update(req,result) {
    sql.query("update course_subject set CourseId=?,SubjectName=?,SubjectCode=?,Year=?,Semister=? where Id = ? ", [req.body.Name,req.body.CourseId,req.body.SubjectName,req.body.SubjectCode,req.body.Year,req.body.Semister,req.body.Id], function (err, data) {             
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
    sql.query("select SQL_CALC_FOUND_ROWS course_subject.*,course.Name as Course from course_subject inner join course on course_subject.CourseId=course.Id LIMIT ?, ?;SELECT FOUND_ROWS() as total;",[skip,pagesize], function (err, response) {             
       
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
    sql.query("select Id,SubjectName as Name from course_subject", function (err, data) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null,data);
        }
    });
}