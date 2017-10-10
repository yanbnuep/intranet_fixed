var fs = require('fs');

const setting = {
  defaultFilePath : "../../storage"
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

function writeFile(filename,path,content,callback) {
    if(!path){
        path = setting.defaultFilePath;
    }
    var file = path + filename;
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