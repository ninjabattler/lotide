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

const flatten = function(array){

  let finalArray = [];

  for(let i = 0; i < array.length; i++){

    if(!(Array.isArray(array[i]))){

      finalArray.push(array[i]);

    } else {

      for(j = 0; j < array[i].length; j++){

        array.push(array[i][j]);

      }

    }

  }
  console.log(finalArray);
  return finalArray;

}

assertArraysEqual(flatten([1,2,[3,4,5,[6]]]), [1,2,3,4,5,6]);