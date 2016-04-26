var Store = require('../models/store');

module.exports.create = function (req, res) {
  var store = new Store(req.body);
  store.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Store.find({}, function (err, results) {
    res.json(results);
  });
}



