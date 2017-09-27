/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var path = require('path');
var Promise = require('promise');
var cloudDB = require('../database/cloudDB');
var tele = require('../database/telephone');
var userManage = require('../database/manageUsers');

route.get('/',function (req,res) {
	// body...
	res.sendFile('tele.html')
});
route.post('/teleSearch',function (req,res) {
	console.log('user create');
	userManage.createUser({username: 'test',password:'text'},res);
});

route.post('/createUser',function(req,res){

});
module.exports  = route;