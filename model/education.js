var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Education = new Schema({
  education : [{
    school_name : String,
    location : String,
    duration : String,
    grade : String,
    courses : [{
      point : String
    }]
  }]
});

module.exports = mongoose.model('Education',Education);
