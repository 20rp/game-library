const Genre = require('../models/Genre');

exports.genres = function (req, res) {
  Genre.findAll()
    .then((genres) => {
      res.render('../views/show', { genres: genres });
    })
    .catch((err) => console.error(err));
};
