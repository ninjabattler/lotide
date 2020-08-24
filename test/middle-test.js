const middle = require('../middle');

const assert = require('chai').assert;

describe('#middle', ()=>{

  it('should return 3 when passed [1,2,3,4,5]', ()=>{

    assert.strictEqual(middle([1,2,3,4,5]), 3);

  });
  it('should return [6, 7] when passed [1,2,3,4,5,6,7,8,9,10,11,12]', ()=>{

    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9,10,11,12]), [6, 7]);

  });

});