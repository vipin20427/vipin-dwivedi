var morgan = require ('morgan');
var bodyParser = require ('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/routes');
var handlebars = require('express-handlebars');
var errorHandler = require('errorHandler');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');


module.exports = function (app){

	//enable logging using morgan
	app.use(morgan('combined'));

	//enable body parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : true}));

	//initialize the mongodb connection.
	mongoose.connect("mongodb://localhost:27017/mongotest");
    mongoose.connection.on('open', function (){
            console.log("Mongo DB connected");
    });


	//initialize the routes
	routes(app);

	//cookie parsing
	app.use(cookieParser('some secret value'));

	//handlebars
	app.engine('handlebars', handlebars.create({
		defaultLayout : 'main',
		layoutDir : app.get('views') + '/layouts',
		partials  : app.get('views') + '/partials'
	}).engine);
	app.set('view engine', 'handlebars');


	//for static rendering of the files.
	app.use(express.static('config/public'));

	//errorhandler setup
	if ( 'development' == app.get('env')){
		app.use(errorHandler());
	}

	return app;
};
