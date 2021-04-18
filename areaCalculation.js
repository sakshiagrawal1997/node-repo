/**
 * Function to calculate area of circle
 * and send back the response to client
 * @param {*} radius 
 * @param {*} res 
 */


function getAreaOfCircle(radius, res){
    const areaOfCircle = Math.PI * radius * radius;
       return areaOfCircle
};
module.exports.getAreaOfCircle = getAreaOfCircle;

function getVolumeOfSphere(radius, res){
    const volumeOfSphere = 4/3 * Math.PI * radius * radius * radius;
    return volumeOfSphere
};
module.exports.getVolumeOfSphere = getVolumeOfSphere;

function getSurfaceAreaOfSphere(radius, res){
    const surfaceAreaOfSphere = 4 * Math.PI * radius * radius;
    return surfaceAreaOfSphere
};
module.exports.getSurfaceAreaOfSphere = getSurfaceAreaOfSphere;


