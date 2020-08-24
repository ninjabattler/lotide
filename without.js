const without = function (ar1, ar2) {

  const finalArray = [];

  for(let item of ar1){

    finalArray.push(item);

  }

  for (let i = 0; i < finalArray.length; i++) {

    for (let j = 0; j < finalArray.length; j++) {

      if (ar1[i] === ar2[j]) {

        finalArray.splice(i, 1);



      }

    }

  }

  console.log(finalArray);

}

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse", "world"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;