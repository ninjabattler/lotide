const map = (ar, callback) => {

  const results = [];

  for (let item of ar) {
    results.push(callback(item));
  }

  return results;

}

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;