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

module.exports = without;
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);