const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("returns false if expected empty for ['Yo yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), []);
  });
})

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words));
// assertEqual(words.length, 3); // original array should still have 3 elements!