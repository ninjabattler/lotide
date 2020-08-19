const assertEqual = function(actual, expected) {

  if (actual === expected) {

    console.log(`✅Assertion Passed: ${actual} === ${expected}`);

  } else {

    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);

  }

};

const countLetters = function(string){

  let amount = {};

  for(let chr of string){

    if(chr !== " "){

      if(!amount[chr]){
        amount[chr] = 0;
      }
    
      amount[chr] += 1;

     }

  }

  return amount;

}

let result = countLetters("hi he ho he");

assertEqual(result["h"], 4);
assertEqual(result["i"], 1);
assertEqual(result["e"], 2);
assertEqual(result["o"], 1);