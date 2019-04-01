Use studentdb;

CREATE TABLE `students` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`firstName` varchar(45) DEFAULT NULL,
`lastName` varchar(45) DEFAULT NULL,
`year` int(11) DEFAULT NULL,
`age` int(11) DEFAULT NULL,
`major` varchar(45) DEFAULT NULL,
`gpa` float(11) DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4;
