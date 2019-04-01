Use studentdb;

LOCK TABLES `students` WRITE;
INSERT INTO `students` VALUES (1, 'Andy','Nguyen',3,20,'computer information systems', 3.5),(2, 'John','Wick',2,30,'Computer Science', 3.4),(3, 'Shrek','L',1,50,'art', 4),(4, 'Waldo','Man',4,2,'Accounting', 3.5);
UNLOCK TABLES;