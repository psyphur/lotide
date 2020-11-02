const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns true for [1, 2, 3, 4], [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  
  it("returns true for [1, 2, 3, 4, 5], 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it("returns false for [1, 2, 3, 4], []", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), []);
  });
})

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // false
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [1, 2]); // false
// assertArraysEqual(middle([1, 2, 3, 4, 5]), 3); // true
// assertArraysEqual(middle([1]), [1]); // false
// assertArraysEqual(middle([1]), []); // true

