module.exports = {
  up:
    "CREATE TABLE `gallery` (`Id` varchar(64) NOT NULL,`Name` mediumtext NOT NULL,`Image` varchar(64) NOT NULL,PRIMARY KEY (`Id`)) ",
  down: "DROP TABLE `gallery`"
};
