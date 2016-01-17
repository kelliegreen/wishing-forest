var userSchema = require('../models/user');

module.exports = {
	getRequests: function (req, res) {
		userSchema.find().then(function (response) {
			res.send(response);
		});
	},

	addRequest: function (req, res) {
		userSchema.find().then(function (data, err) {
			if (err) {
				return res.status(500).send(err);
			}
			data.forEach(function(user){
				user.requests.push(req.body);
				user.save();
			});
		});
		res.send();
	},
	
	removeRequest: function(req, res) {
		userSchema.find().then(function(data, err) {
			if (err) {
				return res.status(500).send(err);
			}
			data.forEach(function(user) {
				user.requests.pull(req.body.id); 
				// objectid not itemid
				user.save();
			});
		});
		res.send();
	},
	
	isAuth: function(req, res, next) {
		if(req.user) {
			next();
		} else {
			res.status(403).send('Not Allowed');
		}
	},
	
	
	
	auth: function(req, res) {
		res.send(req.user);
	}
};