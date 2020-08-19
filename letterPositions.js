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

const assertArraysEqual = function(ar1, ar2) {

  if (eqArrays(ar1, ar2)) {

    console.log(`✅Assertion Passed: ${ar1} === ${ar2}`);

  } else {

    console.log(`🛑Assertion Failed: ${ar1} !== ${ar2}`);

  }

};

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i <= sentence.length; i++) {

    if (sentence[i] !== " ") {

      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
    
      results[sentence[i]].push(i);

    }

  }

  return results;
};

let result = letterPositions("hello");

assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["e"], [1]);
assertArraysEqual(result["l"], [2,3]);
assertArraysEqual(result["o"], [4]);