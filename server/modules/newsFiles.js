var fs = require('fs');
var path = require('path');

const setting = {
  defaultFilePath : path.join(__dirname,"../../storage")
};

//function will check if a directory exists, and create it if it doesn't
function checkDirectoryExists(directory, callback) {
    fs.stat(directory, function(err, stats) {
        //Check if error defined and the error code is "not exists"
        if(err){
            callback(err);
        }
    });
}

function writeFile(filename,pathString,content,callback) {
    if(!pathString){
        pathString = setting.defaultFilePath;
    }
    var file = pathString + filename;
    console.log(file);
    var writeStream = fs.createWriteStream(file,{flags:'w'});

    writeStream.on('finish',function () {
        console.log('file has been written');
    });

    writeStream.write(content);

    writeStream.end();
}
var newsFiles = function () {
    this.writeFile = writeFile;
    this.checkDirectoryExists = checkDirectoryExists;
};
module.exports = new newsFiles();