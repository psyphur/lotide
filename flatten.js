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

module.exports = flatten;

// console.log(flatten([1, 2, [2, 8], 5, [6]]));