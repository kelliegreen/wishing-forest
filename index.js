var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	bcryptNodejs = require('bcrypt-nodejs'),
	session = require('express-session'),
	passport = require('passport'),
	cookieParser = require('cookie-parser'),
	itemsCtrl = require('./core/server/controllers/itemsCtrl'),
	app = express(),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/wishingforest';

require('./core/server/config/passport')(passport);

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: 'fairi3sf0r1if3' }));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log('Connected to MongoDB at ' + mongoUri);
});


app.get('/api/item', itemsCtrl.getItems);
app.post('/api/item', itemsCtrl.addItem);
app.delete('/api/item/getById', itemsCtrl.removeItem),
app.post('/api/signup', passport.authenticate('local-signup', { failure: '/#/login' }), 
function( req, res ) {
	console.log(req);
	res.send(req.user);
});

app.post('/api/login', passport.authenticate('local-login', {
	successRedirect: '/#/manage',
	failure: '/#/login'
}));

app.get('/api/user/authenticated', function(req, res) {
	res.send(req.user);
});

app.use(express.static('./core/public/'));

app.listen(port, function () {
	console.log('Listening on ' + port);
});