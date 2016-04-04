var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 

app.use(express.static(path.join('./clients')));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.listen(8000, function(){
	console.log("Listening at port: 8000"); 
});