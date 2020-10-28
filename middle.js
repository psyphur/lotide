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

const middle = (array) => {

  if (array.length > 2) {
    let evenArrayMiddleElements = [];
    const middleIdx = Math.ceil(array.length / 2);

    if (array.length % 2 !== 0) {
      return array[middleIdx - 1];
    } else {
      evenArrayMiddleElements.push(array[middleIdx] - 1);
      evenArrayMiddleElements.push(array[middleIdx]);
    }
    return evenArrayMiddleElements;
  } else {
    return [];
  }
};


// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []