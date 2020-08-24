const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]], [[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]]), true); // => should PASS

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

describe('#eqArrays', ()=>{

  it('should return true when passed ([[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]], [[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]])', ()=>{

    assert.equal(eqArrays([[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]], [[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]]), true);

  });
  it('should return false when passed ([[2, 3], [4]], [[2, 3], [4, 5]])', ()=>{

    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);

  });

});