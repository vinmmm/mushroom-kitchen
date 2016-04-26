var Space = require('../models/space');

module.exports.create = function (req, res) {
  var space = new Space(req.body);
  space.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Space.find({}, function (err, results) {
    res.json(results);
  });
}