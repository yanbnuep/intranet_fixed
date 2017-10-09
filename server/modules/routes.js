/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var passport = require('passport');
var manageUser = require('../database/manageUsers');
var uploadNews = require('./uploadNews');


route.get('/', function(req, res) {
    // body...
    res.sendFile('tele.html')
});
route.post('/teleSearch', function(req, res) {

});

route.post('/createUser', function(req, res) {
    var user = {
        staffID: 04035,
        loginName: 'ian',
        displayName: 'Ian.Wu',
        password: 'ian6691'
    }

    manageUser.createUser(user,function () {
        manageUser.findUserByLoginName('ian1',function (val) {
            res.send(val);
        });
    });

});

route.post('/login',passport.authenticate('local',{
    successRedirect : 'http://www.google.com', // redirect to the secure profile section
    failureRedirect : 'http://www.baidu.com'}));

route.post('/uploadNews',function (req,res,next) {

    uploadNews(req,res,next);
});

module.exports = route;