var Passport = require('passport');
var LocalStrategy = requie('passport-local');
var User = requie('../database/manageUsers');
var bcrypthash = require('../database/bcrypt');

function strategy() {
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ username: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    ));
}