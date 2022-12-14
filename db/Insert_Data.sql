LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Dark Souls III','2016-03-24','From Software',89,1),(2,'Minecraft','2011-11-18','Mojang',93,NULL),(3,'Metal Gear Solid V: The Phantom Pain','2015-09-01','Kojima Studios',93,3),(4,'Final Fantasy X','2001-06-19','Square',92,NULL),(5,'Rome: Total War','2004-06-22','Creative Assembly',92,NULL),(8,'Read Dead Redemption 2','2019-10-01','Rockstar Studios',93,NULL),(9,'Elden Ring','2022-02-25','From Software',96,NULL),(10,'God of War Ragnarok','2022-11-09','Santa Monica Studios',94,NULL),(11,'Persona 5','2016-09-16','P-Studio',95,NULL);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Action'),(2,'Creative'),(3,'Real Time Strategy'),(4,'Stealth'),(5,'Role Playing Game'),(6,'Rogue-like'),(7,'Souls-like'),(8,'Tactical Strategy'),(9,'Rhythm'),(10,'Casual'),(11,'Simulation');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` VALUES (1,'Bandai Namco','Tokyo','Japan','Satoshi Oshita','2006-03-31'),(2,'Mojang Studios','Söder Mälarstrand, Stockholm','Sweden','Markus Persson','2009-01-01'),(3,'Konami','Ginza, Chūō, Tokyo','Japan','Kagemasa Kōzuki','2000-01-01'),(4,'Feral Interactive','London','United Kingdom','David Stephen','1996-01-01'),(5,'Sqaure Enix','Shinjuku, Tokyo','Japan','Yasuhiro Fukushima','2003-04-01');
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `gamegenres` WRITE;
/*!40000 ALTER TABLE `gamegenres` DISABLE KEYS */;
INSERT INTO `gamegenres` VALUES (1,1,1),(2,2,2),(3,3,4),(4,4,5),(5,5,3);
/*!40000 ALTER TABLE `gamegenres` ENABLE KEYS */;
UNLOCK TABLES;