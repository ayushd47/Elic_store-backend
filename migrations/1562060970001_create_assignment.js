module.exports = {
  up:
    "CREATE TABLE `assignment` (`Id` varchar(64) NOT NULL,`Course_Subject_Id` varchar(64) NOT NULL,`Intake_Year_Month` varchar(255) NOT NULL,`File` varchar(64) NOT NULL,`Submission_Time` varchar(64) NOT NULL,PRIMARY KEY (`Id`), KEY `CourseSubjectId_idx` (`Course_Subject_Id`), CONSTRAINT `Course_Subject_Id` FOREIGN KEY (`Course_Subject_Id`) REFERENCES `course_subject` (`id`)) ",
  down: "DROP TABLE `assignment`"
};
