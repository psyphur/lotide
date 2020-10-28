const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const letterCounter = {};

  for (const letter in sentence) {
    if (sentence[letter] !== ' ') {
      letterCounter[sentence[letter]] = 0;
    }
  }

  for (const count in letterCounter) {
    for (const letter in sentence) {
      if (sentence[letter] === count) {
        letterCounter[count]++;
      }
    }
  }
  return letterCounter;
};

console.log(countLetters("hello"));
console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));