const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe('#assertEqual', ()=>{

  it('should return true when passed (1, 1)', ()=>{

    assert.equal(assertEqual(1,1), true);

  });
  it('should return false when passed ("Lighthouse Labs", "Bootcamp")', ()=>{

    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"), false);

  });

});