var LocalStrategy = require('passport-local');
var User = require('../database/manageUsers');
var bcrypthash = require('../database/bcrypt');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.user('local-login', new LocalStrategy(function(req, username, password, done) {
        User.findUserByLoginName(username, function(user) {
            if (user) {
                bcrypt.compare(password, user.password).then(function(res) {

                });
            }
        });
    }));

}