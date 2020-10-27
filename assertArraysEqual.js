const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    return "Arrays to compare must be of the same size";
  }

  return isEqual;
};

const assertArraysEqual = (firstArray, secondArray) => {
  if (eqArrays(firstArray, secondArray)) {
    console.log("Arrays are equal");
  } else {
    console.log("Arrays are not equal");
  }
};

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 1, 3], [1, 2, 3]);
// assertArraysEqual(["1", 2, "3"], ["1", 2, 3]);
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);