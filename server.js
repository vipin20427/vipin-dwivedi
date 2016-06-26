var express = require('express');
var app = express();
var config = require('./config/configure');


app.set ('port', process.env.PORT || 3000);
app.set ( 'views', __dirname + '/views');
app = config (app);

app.listen (app.get ('port'), function (){
	console.log ("Server started at port " + app.get('port'));
});
