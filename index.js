var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	itemsCtrl = require('./core/server/controllers/itemsCtrl'),
	app = express(),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/wishingforest';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MongoDB at ' + mongoUri);
});


app.get('/api/item', itemsCtrl.getItems);
app.post('/api/item', itemsCtrl.addItem);


app.use(express.static('./core/public/index.html'));

app.listen(port, function () {
	console.log('Listening on ' + port);
});