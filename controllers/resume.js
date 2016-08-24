var ProfileModel = require('../model/profile');
var EducationModel = require("../model/education");
var WorkExperienceModel = require("../model/workexperience");
var AcademicProjectsModel = require("../model/academicprojects");
var ResearchPapersModel = require('../model/researchpapers');
var TechnicalTrainingModel = require('../model/technicaltraining');
var MOOCModel = require('../model/mooc');
var ContactModel = require('../model/contact');


module.exports = {

	homePage : function (req,res){
		res.render('index');
	}
};
