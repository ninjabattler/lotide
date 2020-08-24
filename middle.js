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

module.exports = middle;