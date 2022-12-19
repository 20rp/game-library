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
