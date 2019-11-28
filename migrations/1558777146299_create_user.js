module.exports = {
  up:
    "CREATE TABLE `user` (`Id` varchar(64) NOT NULL,`FullName` longtext NOT NULL,`IsActive` tinyint(1) NOT NULL,`PasswordHash` longtext NOT NULL,`AccessFailedCount` int(11) NOT NULL,`UserName` varchar(256) NOT NULL,  `RoleId` varchar(64) NOT NULL, PRIMARY KEY (`Id`), UNIQUE KEY `Id` (`Id`), UNIQUE KEY `UserNameIndex` (`UserName`(255)), KEY `RoleId_idx` (`RoleId`), CONSTRAINT `UserRoleId` FOREIGN KEY (`RoleId`) REFERENCES `role` (`id`))",
  down: "DROP TABLE `user`"
};
