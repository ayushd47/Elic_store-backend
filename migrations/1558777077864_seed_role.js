const config = require('../shared/config.js');

module.exports = {
    "up": "INSERT INTO `role`(`Id`,`Name`) VALUES('" + config.adminroleid+ "','Admin');",
    "down": "DELETE FROM `user` WHERE `Id` = '" + config.adminroleid+ "';"
}