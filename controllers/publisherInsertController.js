const Publisher = require('../models/Publisher');

exports.insertPublisher = (req, res) => {
  try {
    res.render('../views/insertPublisher');
  } catch (error) {
    console.error(error);
  }
};
