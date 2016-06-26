var morgan = require ('morgan');
var bodyParser = require ('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes');
var handlebars = require('express-handlebars');

module.exports = function (app){

	//enable logging using morgan
	app.use(morgan('combined'));

	//initialize the routes
	routes(app);

	//enable body parsing
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());

	//cookie parsing
	app.use(cookieParser('some secret value'));

	//handlebars 
	app.engine('handlebars', handlebars.create({
		defaultLayout : 'main',
		layoutDir : app.get('views') + '/layouts',
		partials  : app.get('views') + '/partials'
	}).engine);
	app.set('view engine', 'handlebars');


	return app;
};