/*

    I had to disable datatables because it was causing an error regarding the window property.
    This is apparently due to the fact that datatables doesn't like being run in a server side environment
    such as Node.

*/

const Game = require('../models/Game');
const Publisher = require('../models/Publisher');
const Genre = require('../models/Genre');

exports.insertGame = function (req, res) {
  const publishersPromise = Publisher.findAll();
  const genresPromise = Genre.findAll();

  Promise.all([publishersPromise, genresPromise])
    .then(console.log('Tables initiliased.'))
    .then(([publishers, genres]) => {
      res.render('../views/insertGame', {
        publishers: publishers,
        genres: genres,
      });
    })
    .catch((err) => console.error(err));
};

exports.postGame = function (req, res) {
  // Assign local variables to the values parsed from the body in /insert/game
  let gameTitle = req.body.gameTitle;
  let gameReleaseDate = req.body.gameReleaseDate;
  let gameDeveloper = req.body.gameDeveloper;
  let gameMetaCriticScore = req.body.gameMetaCriticScore;
  let gamePublisher = req.body.gamePublisher;
  let gameGenre = req.body.gameGenre;

  Game.findAll();
  game = Game.create({
    gameTitle: gameTitle,
    gameReleaseDate: gameReleaseDate,
    gameDeveloper: gameDeveloper,
    gameMetaCriticScore: gameMetaCriticScore,
    publisherID: gamePublisher,
    // gameGenre: gameGenre, TODO: Add relationship in db
  })
    .then(() => {
      console.log('New Game:', [
        gameTitle,
        gameReleaseDate,
        gameDeveloper,
        gameMetaCriticScore,
        gamePublisher,
        gameGenre,
      ]);
      res.redirect('/insert/game');
    })
    .catch((err) => console.error(err));
};
