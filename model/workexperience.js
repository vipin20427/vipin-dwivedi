var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkExperience = new Schema({
  work_experience : [
    {
      company_name : String,
      duration : String,
      position_held : String,
      location : String,
      work_summary : [{
        point : String
      }]
    }
  ]
});

module.exports = mongoose.model('WorkExperience', WorkExperience);
