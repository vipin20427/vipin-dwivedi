var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AcademicProjects = new Schema({
  academic_projects : [{
      project_title : String,
      duration : String,
      type : String,
      school : String,
      project_summary : [{
        point : String
      }]
  }]
});

module.exports = mongoose.model('AcademicProjects', AcademicProjects);
