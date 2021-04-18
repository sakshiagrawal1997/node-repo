/**
 * function to calculate current age of user from date of birth
 * and send back the response to client
 * @param {*} dateString
 * @param {*} res
 */

function getAge(dateString, res){
   console.log(dateString); 
   
   var today = new Date();
   var birthDate = new Date(dateString);
   var age = today.getFullYear() - birthDate.getFullYear();
   var m = today.getMonth() - birthDate.getMonth();
   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
   {
       age--;
   }
   console.log(age);
   return age;
};

module.exports.getAge = getAge;
