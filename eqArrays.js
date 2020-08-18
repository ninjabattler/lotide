// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`🛑Assertion Failed: ${actual} === ${expected}`);

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);