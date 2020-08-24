const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;

describe('#assertArraysEqual', ()=>{

  it('should return true when passed ([1,2,3],[1,2,3])', ()=>{

    assert.equal(assertArraysEqual([1,2,3],[1,2,3]), true);

  });
  it('should return false when passed ([1,"2",3],[1,2,3])', ()=>{

    assert.equal(assertArraysEqual([1,"2",3],[1,2,3]), false);

  });

});