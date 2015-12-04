var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = Schema({
	itemtype: { type: String, required: true },
	iteminfo: { type: String },
	price: { type: Number },
	imgpath: { type: String },
	available: { type: String, default: 'Yes' }
});


module.exports = mongoose.model('Item', Item);