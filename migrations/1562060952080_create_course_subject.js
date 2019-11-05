module.exports = {
    "up": "CREATE TABLE `course_subject` (`Id` varchar(64) NOT NULL,`CourseId` varchar(64) NOT NULL,`SubjectName` mediumtext NOT NULL,`SubjectCode` varchar(64) NOT NULL,`Year` varchar(64) NOT NULL,`Semister` varchar(64) NOT NULL,PRIMARY KEY (`Id`), KEY `CourseId_idx` (`CourseId`), CONSTRAINT `CourseSubjectId` FOREIGN KEY (`CourseId`) REFERENCES `course` (`id`)) ",
    "down": "DROP TABLE `course_subject`"
}