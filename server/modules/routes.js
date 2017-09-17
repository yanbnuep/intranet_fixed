/**
 * Created by ianwu on 10/08/2017.
 */
var route = require('express').Router();
var path = require('path');

route.get('/',function (req,res) {
	// body...
	res.sendFile('tele.html')
});
// route.get('/tele',function (req,res) {
//     res.sendfile('./css/')
// });


module.exports  = route;