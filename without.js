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

const without = (inputArray, excludedElements) => {
  let output = [];

  for (let i = 0; i < excludedElements.length; i++) {
    for (let j = 0; j < inputArray.length; j++) {
      if (inputArray[j] !== excludedElements[i]) {
        output.push(inputArray[j]);
      }
    }
  }
  return output;
};

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);