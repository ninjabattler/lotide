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

// let result = letterPositions("hello");

// assertArraysEqual(result["h"], [0]);
// assertArraysEqual(result["e"], [1]);
// assertArraysEqual(result["l"], [2,3]);
// assertArraysEqual(result["o"], [4]);

module.exports = letterPositions;