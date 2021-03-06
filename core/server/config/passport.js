var LocalStrategy = require('passport-local').Strategy,
	User = require('../models/user');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(null, user);
		});
	});
	
	
	// Local Signup
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, email, password, done) {

			User.findOne({ 'email': email }, function (err, user) {
				if (err)
					return done(err);
				if (user) {
					return done(null, false);
				} else {
					var newUser = new User();
					newUser.email = email;
					newUser.password = newUser.generateHash(password);
					console.log(newUser);

					newUser.save(function (err) {
						if (err) throw err;
						return done(null, newUser);
					});
				}
			});

		}));


	// Local Login
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
		function (req, email, password, done) {
			User.findOne({ 'email': email }, function (err, user) {
				if (err)
					return done(err);
				if (!user)
					return done(null, false);
				if (!user.validPassword(password))
					return done(null, false);
				return done(null, user);
			});

		}));

};	
