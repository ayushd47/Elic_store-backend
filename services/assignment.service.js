const sql = require("../shared/db");
const uuidv1 = require("uuid/v1");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/assignment/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
var upload = multer({
  storage: storage
}).single("File");
module.exports = {
  create,
  getById,
  update,
  remove,
  getList,
  uploadHandler
};
async function create(req, result) {
  let course_subject = {
    Id: uuidv1(),
    Course_Subject_Id: req.body.Course_Subject_Id,
    Intake_Year_Month: req.body.Intake_Year_Month,
    File: req.body.File,
    Submission_Time: req.body.Submission_Time
  };
  sql.query("INSERT INTO `assignment` SET ?", course_subject, function(
    err,
    data
  ) {
    if (err) {
      result(err, null);
    } else {
      result(null, null);
    }
  });
}
async function getById(id, result) {
  sql.query(
    "select assignment.*,assignment.Id as Id,course_subject.*,course_subject.Id as cid from assignment left join course_subject on assignment.Course_Subject_Id =course_subject.Id where assignment.id = ? ",
    id,
    function(err, data) {
      if (err) {
        result(err, null);
      } else {
        if (data.length < 1) {
          result(null, null);
        } else {
          result(null, data[0]);
        }
      }
    }
  );
}
async function remove(id, result) {
  sql.query("delete from assignment where id = ? ", id, function(err, data) {
    if (err) {
      result(err, null);
    } else {
      result(null, null);
    }
  });
}
async function update(req, result) {
  sql.query(
    "update assignment set Course_Subject_Id=?,Intake_Year_Month=?,File=?,Submission_Time=? where Id = ? ",
    [
      req.body.Course_Subject_Id,
      req.body.Intake_Year_Month,
      req.body.File,
      req.body.Submission_Time,
      req.body.Id
    ],
    function(err, data) {
      if (err) {
        result(err, null);
      } else {
        result(null, null);
      }
    }
  );
}

async function getList(req, result) {
  let pagesize = parseInt(req.query.pagesize),
    skip = parseInt(req.query.skip);
  sql.query(
    "select SQL_CALC_FOUND_ROWS a.*,s.SubjectName as Subject,c.Name as Course from assignment a inner join course_subject s on a.Course_Subject_Id = s.Id inner join course c on c.Id = s.CourseId LIMIT ?, ?;SELECT FOUND_ROWS() as total;",
    [skip, pagesize],
    function(err, response) {
      if (err) {
        result(err, null);
      } else {
        result(null, {
          data: response[0],
          count: response[1][0].total
        });
      }
    }
  );
}

function uploadHandler(req, result) {
  upload(req, result, function(err) {
    if (err) {
      return result(err, "Error uploading file.");
    }
    result(null, req.file);
  });
}
