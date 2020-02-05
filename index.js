const fs = require('fs-extra');
const fileConfig = require('./config');
const SOURCE_BASE_PATH = "source_files/";
const DESTINATION_BASE_PATH = "dest_files/";

let fileNames = Object.keys(fileConfig);

fileNames.forEach( fileName => {
    
    var sourceFilePath = SOURCE_BASE_PATH + fileName;
    var destinationFilePath = DESTINATION_BASE_PATH + fileConfig[fileName];
    var fileContent;

    fs.readFile(sourceFilePath, 'utf8', function (err, data) {
        
        fileContent = data;

        fs.outputFile(destinationFilePath, fileContent, function (err) {

            console.log("sourceFilePath : ", sourceFilePath);
            console.log("destinationFilePath : ", destinationFilePath);
            // console.log("fileContent : ", fileContent);
            console.log("-----------------------------------------------------------------------------------------------------------------");

        });
    });
});
