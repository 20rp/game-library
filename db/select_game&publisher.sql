SELECT gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore, publisherName
FROM games, publishers
WHERE games.publisherID = publishers.ID AND games.publisherID = publishers.ID