const assertEqual = require('./assertEqual');

const eqArrays = (firstArray, secondArray) => {

  let isEqual = true;

  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] === secondArray[i]) {
        isEqual = true;
      } else {
        isEqual = false;
        break;
      }
    }
  } else {
    isEqual = false;
  }

  return isEqual;
};

module.exports = eqArrays;

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bob the builder", "Bob is a builder");
// assertEqual("Bob the builder", "Bob the builder");
// assertEqual(1, 0);
// assertEqual("1", 1);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));