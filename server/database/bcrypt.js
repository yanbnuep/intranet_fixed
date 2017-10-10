var bcrypt = require('bcrypt');
var bluebird = require('bluebird');
const saltRounds = 10;


var hashPasswordAsync = function(plaintextPassword) {
    // body...
    return new bluebird(function(resolve, reject) {
        bcrypt.hash(plaintextPassword, saltRounds, function(err, hash) {
            if (err) {
                reject(err);
            } else {
                console.log(hash);
                resolve(hash);
            }

        });
    })
}


var comparePassword = function (textPassword,hash,cb) {

    bcrypt.compare(textPassword, hash, function (err,res) {
        cb(err,res);
    })
};



var bcryptHash = function() {
    this.hashPasswordAsync = hashPasswordAsync;
    this.comparePassword = comparePassword;
};

module.exports = new bcryptHash();