SELECT gameTitle, gameReleaseDate, gameDeveloper, gameMetaCriticScore, genreTitle
FROM games, gamegenres, genres
WHERE games.ID = gamegenres.gameID AND genres.ID = gamegenres.genreID 