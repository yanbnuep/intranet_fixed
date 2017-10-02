var express = require('express');
var path = require('path');
var route = require('./server/modules/routes');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
var app = express();


//static files serving
app.use(express.static(path.join(__dirname,'public/pages')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

//route
app.use(cookieParser()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//required for passport
app.use('./server/modules/passportStrategy')(passport);
app.use(session({ 
	secret: 'ilovescotchscotchyscotchscotch',
	resave: false,
	saveUninitialized: true,
	cookie: {secure: true} 
})); 
app.use(passport.initialize());
app.use(passport.session());

//router
app.use('/',route);

module.exports = app;