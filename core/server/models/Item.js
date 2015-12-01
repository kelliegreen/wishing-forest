var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = Schema({
	basetype: { type: String },
	wiretype: { type: String },
	price: { type: Number },
	imgpath: { type: String }
	// leaftype: { type: String },
	// available: { type: Boolean },
});

module.exports = mongoose.model('Item', Item);