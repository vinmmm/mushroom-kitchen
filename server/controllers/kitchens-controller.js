var Kitchen = require('../models/kitchen');

module.exports.create = function (req, res) {
  var kitchen = new Kitchen(req.body);
  kitchen.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Kitchen.find({}, function (err, results) {
    res.json(results);
  });
}