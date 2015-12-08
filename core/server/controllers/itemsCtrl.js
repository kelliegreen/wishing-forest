var Item = require('../models/Item');

module.exports = {

	getItems: function (req, res) {
		Item.find().then(function (response) {
			 res.send(response);
		});
	},

	addItem: function (req, res) {
		new Item(req.body).save(function (err, data) {
			if (err) {
				res.status(500).send(err);
			} else {
				console.log(data);
				res.json(data);
			}
		});
	},
	removeItem: function( req, res ) {
		Item.findByIdAndRemove(req.params.id, function( err, data ) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(data);
			}
		});
	},
	updateItem: function (req, res) {
        Item.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
		}
		
};