var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	bcryptNodejs = require('bcrypt-nodejs'),
	session = require('express-session'),
	passport = require('passport'),
	cookieParser = require('cookie-parser'),
	nodemailer = require("nodemailer"),
	smtpTransport = require('nodemailer-smtp-transport'),
	keys = require('./keys'),
	itemsCtrl = require('./core/server/controllers/itemsCtrl'),
	userCtrl = require('./core/server/controllers/userCtrl'),
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
app.get('/api/item/:id', itemsCtrl.getById);
app.post('/api/item', itemsCtrl.addItem);
app.delete('/api/item/:id', itemsCtrl.removeItem);
app.put('/api/item/:id', itemsCtrl.updateItem);
app.get('/api/request', userCtrl.getRequests);
app.post('/api/request', userCtrl.addRequest);
app.delete('/api/request/', userCtrl.removeRequest);
app.post('/api/signup', passport.authenticate('local-signup', { failure: '/#/login' }),
	function (req, res) {
		res.send(req.user);
	});

app.post('/api/login', passport.authenticate('local-login', { failure: '/#/login' }),
	function (req, res) {
		res.send(req.user);
	});

app.get('/api/auth', userCtrl.isAuth, userCtrl.auth);

app.get('/api/logout', function (req, res) {
    req.logout();
	req.session.destroy();
    res.redirect('/#/admin');
});

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: keys.fromEmail,
        pass: keys.emailPassword
    }
}, {
		// default values for sendMail method
		from: keys.fromEmail,
		headers: {
			'My-Awesome-Header': '123'
		}
	});

app.post('/api/contact', function (req, res) {
	console.log('Message Sent');
	transporter.sendMail({
		to: keys.toEmail,
		subject: 'New Mail From ' + req.body.name + ', ' + req.body.email,
		text: req.body.email + " " + req.body.message + " " + req.body.image
	});
	res.send();
});

app.use(express.static('./core/public/'));

app.listen(port, function () {
	console.log('Listening on ' + port);
});