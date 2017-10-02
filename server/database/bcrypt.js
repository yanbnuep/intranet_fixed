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

function comparePasswordAsync(plaintextPassword,password) {
    return new bluebird(function(resolve, reject) {
        bcrypt.compare(plaintextPassword, password, function(err, res) {
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
    this.comparePassword = comparePasswordAsync;
}

module.exports = new bcryptHash();