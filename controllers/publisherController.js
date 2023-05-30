const Publisher = require('../models/Publisher');

exports.publishers = function (req, res) {
  Publisher.findAll()
    .then((publishers) => {
      res.render('../views/publishers', { publishers: publishers });
    })
    .catch((err) => console.error(err));
};
