const assert = require('chai').assert;

const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe('#tail', ()=>{

  it('should return ["Lighthouse", "Labs"] when passed ["Yo Yo", "Lighthouse", "Labs"]', ()=>{

    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);

  });
  it('should return not modify the original input variable', ()=>{

    tail(words)
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);

  });

});