var express = require('express');
var router = express.Router();
var resume = require('../../controllers/resume');


module.exports = function (app)
{
	//website API
	router.get('/', resume.homePage);

	app.use ('/vipin',router);
};
