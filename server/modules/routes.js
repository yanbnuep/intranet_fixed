/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var path = require('path');

route.get('/',function (req,res) {
	// body...
	res.sendFile('index.html')
});


module.exports  = route;