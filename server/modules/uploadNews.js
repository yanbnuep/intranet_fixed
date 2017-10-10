var qs = require('querystring');
var event = require('events');
var fs = require('fs');
var newsFiles = require('./newsFiles');
const filePath = "../";

module.exports = function (req,res,next) {
    var data = req.body.data;
    if(!data){
        res.send("empty data");
        return false;
    }else {
        var news = JSON.stringify(data.newsContent);
        console.log(news);
        newsFiles.writeFile('text.txt',null,news,function (err) {
            console.log(err);
        })
    }
    res.sendStatus(200);
    next();
};

function parseData(data) {
    if(!Array.isArray(data)){return data}
    return  arrToObj(data);
}

function  arrToObj(arr) {

    return arr.reduce(function (acc,cur) {
        if(cur.name && cur.value){
            acc[cur.name] = cur.value;
        }
        return acc;
    },{});
}

