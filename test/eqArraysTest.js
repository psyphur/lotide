const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bob the builder", "Bob is a builder");
assertEqual("Bob the builder", "Bob the builder");
assertEqual(1, 0);
assertEqual("1", 1);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
