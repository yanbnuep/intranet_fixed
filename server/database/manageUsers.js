var cloudDB = require('./cloudDB');
const squel = require('squel');
var bluebird = require('bluebird');
var hash = require('./bcrypt');

const saltRounds = 10;

function createUser(user,cb) {

    if (!user.loginName || !user.password || !user.displayName) {
        console.log('save user expect username and password');
        return false;
    }

    hash.hashPasswordAsync(user.password).then(function(hash) {
        user.password = hash;
        saveUser(user)
    })

    if(cb){
        cb(hash);
    }

}

function saveUser(user) {

    return new bluebird(function(resolve, reject) {

        var sql = squel.insert().into("users")
            .set("loginName", user.loginName)
            .set("displayName", user.displayName)
            .set("staffID", user.staffID)
            .set("password", user.password).toString();

        cloudDB.query(sql, function(err, rows) {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
        cloudDB.end();
    });

}


function findUserByLoginName(name,cb) {

    var sql = squel.select().from("users").where("loginName = ?", name).toString();
    cloudDB.query(sql, function(err, rows) {
        if (err) {
            return cb(err);
        } else {
            cb(null,rows[0]);
        }
    });
    cloudDB.end();
}


var manageUsers = function() {
    this.createUser = createUser;
    this.findUserByLoginName = findUserByLoginName;
}

module.exports = new manageUsers();