var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = Schema({
	basetype: { type: String },
	// wiretype: { type: String },
	// leaftype: { type: String },
	// avalible: { type: Boolean },
	// price: { type: Number }
});

module.exports = mongoose.model('Item', Item);