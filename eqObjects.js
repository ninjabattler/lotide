const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {

  let length = [0, 0];

  for(let key in object1){
    length[0]++;
  }
  for(let key in object2){
    length[1]++;
  }

  if(length[0] !== length[1]){

    return false;
    
  }

  for(let key in object1){

    if(Array.isArray(object1[key])){

      if(!eqArrays(object1[key], object2[key])){

        return false;

      }

    } else if(typeof object1[key] === "object"){

      if(!eqObjects(object1[key], object2[key])){

        return false;

      }

    } else if(object1[key] !== object2[key]){

      return false;

    }

  }

  return true;

};


module.exports = eqObjects;