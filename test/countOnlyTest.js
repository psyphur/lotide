const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  it("returns [1, 2, 2, 3, 3, 4, 5] for [1, 2, [2, 3], 3, [4, 5]]", () => {
    assert.strictEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), 1);
  });
  
  it("returns [1, 2, 2, 3, 4, 5] for [1, 2, [2, 3, 4], 5]", () => {
    assert.strictEqual(countOnly([1, 2, [2, 3, 4], 5]), [1, 2, 2, 3, 4, 5]); 
  });
})

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames);

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);