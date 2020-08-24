const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ar1, ar2){

  if (eqArrays(ar1, ar2)) {

    console.log(`✅Assertion Passed: ${ar1} === ${ar2}`);

  } else {

    console.log(`🛑Assertion Failed: ${ar1} !== ${ar2}`);

  }

}

module.exports = assertArraysEqual;