const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inputArray) {
  let outputArray = [];

  for (let i = 1; i < inputArray.length; i++) {
    outputArray.push(inputArray[i]);
  }

  return outputArray;
};

console.log(tail([1, 2, 3]));
console.log([1, 2, 3]);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!