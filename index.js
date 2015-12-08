var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	bcryptNodejs = require('bcrypt-nodejs'),
	session = require('express-session'),
	passport = require('passport'),
	cookieParser = require('cookie-parser'),
	keys = require('./keys'),
	itemsCtrl = require('./core/server/controllers/itemsCtrl'),
	app = express(),
	port = 9000,
	mongoUri = 'mongodb://localhost:27017/wishingforest';

require('./core/server/config/passport')(passport);

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: keys.secret }));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log('Connected to MongoDB at ' + mongoUri);
});


app.get('/api/item', itemsCtrl.getItems);
app.post('/api/item', itemsCtrl.addItem);
app.delete('/api/item/:id', itemsCtrl.removeItem),
app.put('/api/item/:id', itemsCtrl.updateItem);
app.post('/api/signup', passport.authenticate('local-signup', { failure: '/#/login' }), 
function( req, res ) {
	res.send(req.user);
});

app.post('/api/login', passport.authenticate('local-login', { failure: '/#/login' }), 
function( req, res ) {
	res.send(req.user);
});

app.get('/api/user/authenticated', function(req, res) {
	res.send(req.user);
});

app.get('/api/logout', function(req, res) {
    req.logout();
	req.session.destroy();
    res.redirect('/#/admin');
});


app.use(express.static('./core/public/'));

app.listen(port, function () {
	console.log('Listening on ' + port);
});