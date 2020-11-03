const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 2, 3, 3, 4, 5] for [1, 2, [2, 3], 3, [4, 5]]", () => {
    assert.deepEqual(flatten([1, 2, [2, 3], 3, [4, 5]]), [1, 2, 2, 3, 3, 4, 5]);
  });
  
  it("returns [1, 2, 2, 3, 4, 5] for [1, 2, [2, 3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [2, 3, 4], 5]), [1, 2, 2, 3, 4, 5]); 
  });
})

// console.log(flatten([1, 2, [2, 8], 5, [6]]));