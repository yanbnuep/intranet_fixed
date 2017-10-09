var qs = require('querystring');
var event = require('events');
module.exports = function (req,res,next) {
    console.log(req.body.data);
};