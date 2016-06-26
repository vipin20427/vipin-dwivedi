var morgan = require ('morgan');
var bodyParser = require ('body-parser');
var cookieParser = require('cookie-parser');

module.exports = function (app){

	//enable logging using morgan
	app.use(morgan('combined'));

	//enable body parsing
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());

	//cookie parsing
	app.use(cookieParser('some secret value'));

	return app;
};