var Passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('../database/manageUsers');
var bcrypthash = require('../database/bcrypt');

function strategy() {

    Passport.serializeUser(function(user, done) {
    	console.log('ser');
        done(null, user.username);
    });

    // used to deserialize the user
    Passport.deserializeUser(function(id, done) {
    	console.log('de');
        User.findUserByLoginName(username, function(err, user) {
            done(err, user);
        });
    });


    Passport.use('local-login',new LocalStrategy(
        function(username, password, done) {
        	console.log('st');
        	User.findUserByLoginName(username).then(function(user){
        		if(!user){
        			return done(null,false);
        		}else {
        			bcrypthash.comparePasswordAsync(user.password,password).then(function(result){
        				if(result){
        					return done(null,user)
        				}else {
        					return done(null,false);
        				}
        			});
        		}
        	}).catch(function(err){
        		if(err){
        			return done(err);
        		}
        	});
        }
    ));
}

module.exports = new strategy();