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

// assertArraysEqual(flatten([1,2,[3,4,5,[6]]]), [1,2,3,4,5,6]);

module.exports = flatten;