const findKey = (object, callback) => {
  let result;

  for (const data in object) {
    const dataKey = object[data];

    if (callback(dataKey)) {
      result = data;
      break;
    }
  }
  return result;
};

module.exports = findKey;
// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// assertEqual(result1, undefined);
