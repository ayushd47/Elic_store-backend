const config = require("../shared/config.js");

module.exports = {
  up:
    "INSERT INTO `role`(`Id`,`Name`) VALUES('" +
    config.studentroleid +
    "','Student');",
  down: "DELETE FROM `user` WHERE `Id` = '" + config.studentroleid + "';"
};
