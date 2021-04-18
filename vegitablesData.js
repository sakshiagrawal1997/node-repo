const fs = require("fs");

/**
 *  Function to read a file from local project directory
 * and send it back to client side
 * @param {*} pathString 
 * @param {*} res 
 */
function vegitablesData(pathString, res){
    fs.readFile(pathString, function (err, data){
        //  console.log(err, data);
        //  console.log(JSON.parse(data));
         const dataFromFile = JSON.parse(data);
         console.log(dataFromFile.results);
         res.writeHead(200, { "Content-Type": "application/json" });
         res.write(JSON.stringify(dataFromFile));
         res.end();
 });
}





module.exports.vegitablesData = vegitablesData;