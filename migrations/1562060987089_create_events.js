module.exports = {
    "up": "CREATE TABLE `events` (`Id` varchar(64) NOT NULL,`Name` mediumtext NOT NULL,`Description` mediumtext NOT NULL,`Long_Description` text NOT NULL,`IsActive` integer(25) NOT NULL,`File` varchar(255) NOT NULL,PRIMARY KEY (`Id`)) ",
    "down": "DROP TABLE `events`"
}