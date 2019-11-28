const sql = require("../shared/db");
const uuidv1 = require("uuid/v1");
const path = require("path");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/gallery/");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
var upload = multer({ storage: storage }).single("Image");
module.exports = {
  create,
  getById,
  update,
  remove,
  getList,
  uploadHandler
};
async function create(req, result) {
  let gallery = { Id: uuidv1(), Name: req.body.Name, Image: req.body.Image };
  sql.query("INSERT INTO `gallery` SET ?", gallery, function(err, data) {
    if (err) {
      result(err, null);
    } else {
      result(null, null);
    }
  });
}
async function getById(id, result) {
  sql.query("select Id,Name,Image from gallery where id = ? ", id, function(
    err,
    data
  ) {
    if (err) {
      result(err, null);
    } else {
      if (data.length < 1) {
        result(null, null);
      } else {
        result(null, data[0]);
      }
    }
  });
}
async function remove(id, result) {
  sql.query("delete from gallery where id = ? ", id, function(err, data) {
    if (err) {
      result(err, null);
    } else {
      result(null, null);
    }
  });
}
async function update(req, result) {
  sql.query(
    "update gallery set Name=?,Image=? where Id = ? ",
    [req.body.Name, req.body.Image, req.body.Id],
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
    "select SQL_CALC_FOUND_ROWS Id, Name,Image from gallery LIMIT ?, ?;SELECT FOUND_ROWS() as total;",
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
