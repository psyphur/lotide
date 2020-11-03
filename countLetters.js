const countLetters = (sentence) => {
  let result = {};

  for (const letter of sentence) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;