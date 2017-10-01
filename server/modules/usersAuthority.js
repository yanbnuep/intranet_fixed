var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

var authorityInit = function(req,res,next){
	passport.use(new LocalStrategy(
		function(username,password,done){
			
		}
	));
}