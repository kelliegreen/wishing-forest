var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs');
	
var userSchema = mongoose.Schema({
		email: String,
		password: String,
		requests: [{
			image: String,
			item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item'},
			contactName: String,
			contactEmail: String,
			message: String
		}]
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);