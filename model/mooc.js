var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoocModel = new Schema({
  MOOC : [{
    course_name : String,
    school : String,
    certification_link : String
  }]
});

module.exports = mongoose.model('MoocModel', MoocModel);
