const http = require("http");
const url = require("url");
const getAgeFile = require("./ageCalculation");
const vegitablesDatafile = require("./vegitablesData");
const getAreaCalc = require("./areaCalculation");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});

    var path = req.url
    var query = url.parse(req.url, true).query;
   if(path.includes("/age")) { 
       const dateString = `${query.year}/${query.month}/${query.date}`;
       const age = getAgeFile.getAge(dateString);

       res.write(
        `<p>Hello ${query.name}</p><p>You are currently ${age} years old</p>`
    );
    res.end();
   }else if (path.includes("/vegitables")){
     
     const pathString = `${__dirname}/data/vegitables.json`;
    //  console.log(pathString);
    vegitablesDatafile.vegitablesData(pathString, res);
    
   }else if (path.includes("/metrics")){
     const type = query.metric;
     const radius = query.radius;
     const object = query.object;
     let result = "";
     if (type === "area") {
      result =  getAreaCalc.getAreaOfCircle(radius);
     }else if (type === "volume") {
       result = getAreaCalc.getVolumeOfSphere(radius);
     }else if (type === "surfaceArea") {
       result = getAreaCalc.getSurfaceAreaOfSphere(radius);
     }
     res.write(`${type} of ${object} is ${result.toFixed(2)}`);
     res.end();
   } 

   else{
    res.write("Hello World");
    res.end(); 
   }  
   
}).listen(8080);

