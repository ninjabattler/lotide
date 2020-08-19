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

const assertArraysEqual = function(ar1, ar2){

  if (eqArrays(ar1, ar2)) {

    console.log(`✅Assertion Passed: ${ar1} === ${ar2}`);

  } else {

    console.log(`🛑Assertion Failed: ${ar1} !== ${ar2}`);

  }

}

const middle = function(input){

  if(input.length <= 2) {

    return [];

  }

  if(input.length % 2 === 0){

    let middle1 = input[(input.length/2) -1];

    let middle2 = input[input.length/2];

    return [middle1, middle2];

  } else {

    return input[Math.floor(input.length/2)];

  }

}

console.log(middle([1,2,3,4,5]));

console.log(middle([1,2,3,4,5,6,7,8,9,10,11,12]));