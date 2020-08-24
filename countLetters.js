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

module.exports = countLetters;