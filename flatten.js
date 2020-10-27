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

const flatten = (inputArray) => {
  let outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    // console.log("checking for index: " + i);
    if (Array.isArray(inputArray[i])) {
      // console.log("is array");
      for (let j = 0; j < inputArray[i].length; j++) {
        outputArray.push(inputArray[i][j]);
      }
    } else {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

// console.log(flatten([1, 2, [2, 8], 5, [6]]));