var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contact = new Schema({
  contact : {
    facebook : String,
    linkedin : String,
    twitter : String,
    github : String,
    email : String,
    phone : String
  }
});

module.exports = mongoose.model('Contact', Contact);
