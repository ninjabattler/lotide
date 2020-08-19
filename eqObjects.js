const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);

  }

};

const eqArrays = function(ar1, ar2) {

  if (ar1.length !== ar2.length)
    return false;

  for (let i = 0; i < ar1.length; i++) {

    if (ar1[i] !== ar2[i]) {

      return false;

    }

  }

  return true;

};

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

        return false

      }

    } else if(object1[key] !== object2[key]){

      return false;

    }

  }

  return true;

};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false