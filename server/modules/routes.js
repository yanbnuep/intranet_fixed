/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var path = require('path');
var tele = require('../database/telephone');

route.get('/',function (req,res) {
	// body...
	res.sendFile('tele.html')
});
route.post('/teleSearch',function (req,res) {
	tele(req,res)
});


module.exports  = route;