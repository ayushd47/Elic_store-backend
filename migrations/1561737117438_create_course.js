module.exports = {
  up:
    "CREATE TABLE `course` (`Id` varchar(64) NOT NULL,`Name` mediumtext NOT NULL,`Duration` varchar(64) NOT NULL,`File` varchar(64) NOT NULL,PRIMARY KEY (`Id`)) ",
  down: "DROP TABLE `course`"
};
