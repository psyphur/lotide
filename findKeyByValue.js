const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (toSearch, valueToSearch) => {
  
  /* first solution attempt */
  // for (const elementToSearch in toSearch) {
  //   for (const value in toSearch) {
  //     if (toSearch[value] === valueToSearch) {
  //       return value;
  //     }
  //   }
  // }
  // return undefined;

  const searchKey = Object.keys(toSearch);

  for (const index in searchKey) {
    let indexOfSearch = searchKey[index];
    let indexValue = toSearch[indexOfSearch];

    if (valueToSearch === indexValue) {
      return indexOfSearch;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "Bob's Burgers"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Bob's Burgers"), "cartoon");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);