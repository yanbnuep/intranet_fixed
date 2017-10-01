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
                resolve(hash);
            }

        });
    })
}

function comparePasswordAsync(plaintextPassword) {
    return new bluebird(function(resolve, reject) {
        bcrypt.compare(plaintextPassword, hash, function(err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    })
}



var bcryptHash = function() {
    this.hashPasswordAsync = hashPasswordAsync;
    this.comparePassword = comparePassword;
}

module.exports = new bcryptHash();