const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');

assertEqual(eqArrays([[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]], [[2, 3], [4], [[[[[[4, [[[5]]]]]]]]]]), true); // => should PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);