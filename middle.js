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

module.exports = middle;

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []