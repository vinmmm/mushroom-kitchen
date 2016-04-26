var Item = require('../models/item');

module.exports.create = function (req, res) {
  var item = new Item(req.body);
  item.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Item.find({}, function (err, results) {
    res.json(results);
  });
}