/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var path = require('path');

var cloudDB = require('../database/cloudDB');
var tele = require('../database/telephone');

var userManage = require('../database/manageUsers');
var passport = require('passport');
var pasportStrategy = require('./passportStrategy');

route.get('/', function(req, res) {
    // body...
    res.sendFile('tele.html')
});
route.post('/teleSearch', function(req, res) {

});

route.post('/createUser', function(req, res) {

});

route.post('/login', passport.authenticate('local-login', {
    successRedirect: 'http://www.google.com',
    failureRedirect: 'http://www.baidu.com',
}));

module.exports = route;