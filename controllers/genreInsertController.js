const Genre = require('../models/Genre');

exports.insertGenre = (req, res) => {
  try {
    res.render('../views/insertGenre');
  } catch (error) {
    console.error(error);
  }
};
