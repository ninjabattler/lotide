const eqArrays = function(ar1, ar2) {

  if (ar1.length !== ar2.length)
    return false;

  for (let i = 0; i < ar1.length; i++) {

    if(Array.isArray(ar1[i]) && Array.isArray(ar2[i])){

      if(!eqArrays(ar1[i], ar2[i])){

        return false;

      }

    } else if (ar1[i] !== ar2[i]) {

      return false;

    }

  }

  return true;

};

module.exports = eqArrays;