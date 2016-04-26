var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');
    spacesController = require('./server/controllers/spaces-controller');
    storesController = require('./server/controllers/stores-controller');
    itemsController = require('./server/controllers/items-controller');
    kitchensController = require('./server/controllers/kitchens-controller');

mongoose.connect('mongodb://localhost:27017/kitchen');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/css', express.static(__dirname + '/client/css'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.get('/api/spaces', spacesController.list);
app.post('/api/spaces', spacesController.create);

app.get('/api/stores', storesController.list);
app.post('/api/stores', storesController.create);

app.get('/api/items', itemsController.list);
app.post('/api/items', itemsController.create);

app.get('/api/kitchens', kitchensController.list);
app.post('/api/kitchens', kitchensController.create);

function initStore(){
	var items = [];
	var storeObj = {};
	for (var itemIDX in items){
		storeObj [items[itemIDX]] = 
		Math.floor(Math.random() * 5 + 1);
	}
return storeObj;
}
var items = initStore();
app.get('/api/items', function (req, res){
	items = initStore();
	res.json(items);
});
app.post('/api/items', function (req, res){
	if (items[req.body.item] > 0){
		items[req.body.item] = 
		items[req.body.item] - 1;
		res.json(items);

	}else {
		res.json(400, { msg: 'Sorry ' + req.body.item +
	                         ' is out of stock.'});
	}
});
app.listen(2000, function() {
  console.log('I\'m Listening...');
})