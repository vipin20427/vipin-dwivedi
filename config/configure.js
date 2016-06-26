var morgan = require ('morgan');
var bodyParser = require ('body-parser');

module.exports = function (app){

	//enable logging using morgan
	app.use(morgan('combined'));

	//enable body parsing
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());


	return app;
};