var LocalStrategy = require('passport-local');
var User = require('../database/manageUsers');
var bcrypthash = require('../database/bcrypt');
var util = require('util');

module.exports = function(passport) {
    return function(req,res,next){
        passport.serializeUser(function(user, done) {
            console.log(user.id);
            done(null, user.id);
        });

        // used to deserialize the user
        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user) {
                console.log(err+user);
                done(err, user);
            });
        });

        passport.use(new LocalStrategy(
            function(username, password, done) {
                User.findUserByLoginName(username, function (err, user) {
                    if (err) { return done(err); }
                    if (!user) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    bcrypthash.comparePassword(password,user.password,function (err,result) {
                        if(err){throw err}
                        if(result){
                            return done(null, user);
                        }else {
                            return done(null,false)
                        }
                    });

                });
            }
        ));
        next();
    }

}