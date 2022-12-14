CREATE DATABASE  IF NOT EXISTS `gamelibrary` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gamelibrary`;



--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `gameTitle` varchar(255) DEFAULT NULL,
  `gameReleaseDate` date DEFAULT NULL,
  `gameDeveloper` varchar(100) DEFAULT NULL,
  `gameMetaCriticScore` int DEFAULT NULL,
  `publisherID` int DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'Dark Souls III','2016-03-24','From Software',89,1),(2,'Minecraft','2011-11-18','Mojang',93,NULL),(3,'Metal Gear Solid V: The Phantom Pain','2015-09-01','Kojima Studios',93,3),(4,'Final Fantasy X','2001-06-19','Square',92,NULL),(5,'Rome: Total War','2004-06-22','Creative Assembly',92,NULL);
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `genreTitle` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Action'),(2,'Creative'),(3,'Real Time Strategy'),(4,'Stealth'),(5,'Role Playing Game'),(6,'Rogue-like'),(7,'Souls-like'),(8,'Tactical Strategy'),(9,'Rhythm'),(10,'Casual'),(11,'Simulation');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publishers`
--

DROP TABLE IF EXISTS `publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publishers` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `publisherName` varchar(100) DEFAULT NULL,
  `publisherHq` varchar(100) DEFAULT NULL,
  `publisherCountry` varchar(100) DEFAULT NULL,
  `publisherFounder` varchar(100) DEFAULT NULL,
  `publisherFoundedDate` date DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publishers`
--

LOCK TABLES `publishers` WRITE;
/*!40000 ALTER TABLE `publishers` DISABLE KEYS */;
INSERT INTO `publishers` VALUES (1,'Bandai Namco','Tokyo','Japan','Satoshi Oshita','2006-03-31'),(2,'Mojang Studios','Söder Mälarstrand, Stockholm','Sweden','Markus Persson','2009-01-01'),(3,'Konami','Ginza, Chūō, Tokyo','Japan','Kagemasa Kōzuki','2000-01-01'),(4,'Feral Interactive','London','United Kingdom','David Stephen','1996-01-01'),(5,'Sqaure Enix','Shinjuku, Tokyo','Japan','Yasuhiro Fukushima','2003-04-01');
/*!40000 ALTER TABLE `publishers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

DROP TABLE IF EXISTS `gamegenres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gamegenres` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `gameID` int NOT NULL,
  `genreID` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `gameID` (`gameID`),
  KEY `genreID` (`genreID`),
  CONSTRAINT `gamegenres_ibfk_1` FOREIGN KEY (`gameID`) REFERENCES `games` (`ID`),
  CONSTRAINT `gamegenres_ibfk_2` FOREIGN KEY (`genreID`) REFERENCES `genres` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamegenres`
--

LOCK TABLES `gamegenres` WRITE;
/*!40000 ALTER TABLE `gamegenres` DISABLE KEYS */;
INSERT INTO `gamegenres` VALUES (1,1,1),(2,2,2),(3,3,4),(4,4,5),(5,5,3);
/*!40000 ALTER TABLE `gamegenres` ENABLE KEYS */;
UNLOCK TABLES;