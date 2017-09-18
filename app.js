var express = require('express');
var path = require('path');
var route = require('./server/modules/routes');

var app = express();

//static files serving
app.use(express.static(path.join(__dirname,'public/pages')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

//logger
var logger = function (req,res,next) {
    console.log(req);
    next();
};

//route
app.use('/',route);

module.exports = app;