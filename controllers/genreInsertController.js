const Genre = require('../models/Genre');

exports.insertGenre = (req, res) => {
  try {
    res.render('../views/insertGenre');
  } catch (error) {
    console.error(error);
  }
};

exports.postGenre = (req, res) => {
  let genreTitle = req.body.genreTitle;

  Genre.findAll();
  genre = Genre.create({
    genreTitle: genreTitle,
  })
    .then(() => {
      res.redirect('/insert/game');
    })
    .catch((err) => console.error(err));
};
