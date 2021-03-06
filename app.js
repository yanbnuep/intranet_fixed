var express = require('express');
var path = require('path');
var route = require('./server/modules/routes');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');
var strategy = require('./server/modules/passportStrategy');
var app = express();


//static files serving
app.use(express.static(path.join(__dirname,'public/pages')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

//route
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));
//required for passport
app.use(session({ 
	secret: 'ilovescotchscotchyscotchscotch',
	resave: false,
	saveUninitialized: true,
	cookie: {secure: true} 
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(strategy(passport));

//router
app.use('/',route);

module.exports = app;