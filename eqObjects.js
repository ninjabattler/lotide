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


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false