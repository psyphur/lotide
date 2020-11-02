const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


// describe("#assertArraysEquals", () => {
//   it("returns 'Arrays are equal' for [1, 2, 3], [1, 2, 3]", () => {
//     assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "Arrays are equal");
//   });
  
//   it("returns true for [1, 1, 3], [1, 2, 3]", () => {
//     assert.strictEqual(assertArraysEqual([1, 1, 3], [1, 2, 3]), false);
//   });

//   it("returns false for [1, 1, 3], [1, 2, 3]", () => {
//     assert.strictEqual(assertArraysEqual([1, 1, 3], [1, 2, 3]));
//   });
// })

;
assertArraysEqual(["1", 2, "3"], ["1", 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);