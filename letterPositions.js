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

const letterPositions = function(sentence) {
  const results = {};
  
  for (const letter in sentence) {
    if (sentence[letter] !== ' ') {
      results[sentence[letter]] = [];
    }
  }

  for (const letterIndex in sentence) {
    for (const resultLetter in results) {
      if (sentence[letterIndex] === resultLetter) {
        results[resultLetter].push(Number(letterIndex));
      }
    }
  }
  return results;
};

// console.log(letterPositions("hello there"));
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);
