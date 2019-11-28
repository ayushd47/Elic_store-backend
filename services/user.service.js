const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sql = require("../shared/db");
const config = require("../shared/config");
const uuidv1 = require("uuid/v1");
module.exports = {
  authenticate,
  create,
  getById,
  getPaginatedList,
  update,
  remove,
  registerstudent
};
async function authenticate(req, result) {
  sql.query(
    "select * from user where username = ? ",
    req.body.username,
    function(err, data) {
      if (err) {
        result(err, null);
      } else {
        if (data.length < 1) {
          result("Incorrect username or password.", null);
        } else {
          if (data[0].RoleId != req.RoleId)
            result("Incorrect username or password.", null);
          else {
            if (bcrypt.compareSync(req.body.password, data[0].PasswordHash)) {
              let token = jwt.sign(
                {
                  UserId: data[0].Id,
                  UserName: data[0].UserName,
                  RoleId: data[0].RoleId
                },
                config.secret,
                {
                  expiresIn: "24h" // expires in 24 hours
                }
              );

              // return the JWT token for the future API calls
              result(null, {
                token: token,
                fullname: data[0].FullName
              });
            } else {
              result("Incorrect username or password.", null);
            }
          }
        }
      }
    }
  );
}

async function create(req, result) {
  sql.query(
    "select * from user where UserName = ?",
    [req.body.UserName],
    function(err1, data1) {
      if (err1) {
        result(err1, null);
      } else {
        if (data1.length > 0)
          result("Username already exists in the system", null);
        else {
          let user = {
            Id: uuidv1(),
            FullName: req.body.FullName,
            IsActive: 1,
            PasswordHash: bcrypt.hashSync(req.body.Password, 10),
            AccessFailedCount: 0,
            UserName: req.body.UserName,
            RoleId: req.body.RoleId
          };
          sql.query("INSERT INTO `user` SET ?", user, function(err, data) {
            if (err) {
              result(err, null);
            } else {
              result(null, null);
            }
          });
        }
      }
    }
  );
}
async function getById(id, result) {
  sql.query(
    "select Id,FullName,UserName,RoleId from user where id = ? ",
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
  sql.query("delete from user where id = ? ", id, function(err, data) {
    if (err) {
      result(err, null);
    } else {
      result(null, null);
    }
  });
}
async function update(req, result) {
  sql.query(
    "select * from user where UserName = ? and Id != ?",
    [req.body.UserName, req.body.Id],
    function(err1, data1) {
      if (err1) {
        result(err1, null);
      } else {
        if (data1.length > 0)
          result("Username already exists in the system", null);
        else {
          sql.query(
            "update user set FullName=?,UserName=?,RoleId=? where Id = ? ",
            [
              req.body.FullName,
              req.body.UserName,
              req.body.RoleId,
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
      }
    }
  );
}
async function getPaginatedList(req, result) {
  let pagesize = parseInt(req.query.pagesize),
    skip = parseInt(req.query.skip);
  sql.query(
    "select SQL_CALC_FOUND_ROWS Id, FullName, UserName, IsActive from user LIMIT ?, ?;SELECT FOUND_ROWS() as total;",
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
async function registerstudent(req, result) {
  sql.query(
    "select * from user where UserName = ?",
    [req.body.UserName],
    function(err1, data1) {
      if (err1) {
        result(err1, null);
      } else {
        if (data1.length > 0)
          result("Username already exists in the system", null);
        else {
          let user = {
            Id: uuidv1(),
            FullName: req.body.FullName,
            IsActive: 1,
            PasswordHash: bcrypt.hashSync(req.body.Password, 10),
            AccessFailedCount: 0,
            UserName: req.body.UserName,
            RoleId: config.studentroleid
          };
          sql.query("INSERT INTO `user` SET ?", user, function(err, data) {
            if (err) {
              result(err, null);
            } else {
              result(null, null);
            }
          });
        }
      }
    }
  );
}
