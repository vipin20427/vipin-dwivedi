var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Profile = new Schema ({
	profile : {type : String}
});

module.exports = mongoose.model('Profile', Profile);
