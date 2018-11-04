var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = 1705;
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser,encodedurl({extended:true() }));


