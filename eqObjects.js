const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const o1Key = Object.keys(object1);
  const o2Key = Object.keys(object2);
  let isEqual = false;

  if (o1Key.length === o2Key.length) {
    // console.log(`${object1}, ${object2} - ${o1Key.length}, ${o2Key.length}`)
    for (const key of o1Key) {
      // console.log(`${key}, ${object1[key]}, ${object2[key]}`);
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (object1[key].length === object2[key].length) {
          isEqual = eqArrays(object1, object2);
        } else {
          isEqual = false;
        }
      } else {
        if (object1[key] === object2[key]) {
          isEqual = true;
        }
      }
    }
  }
  return isEqual;
};

module.exports = eqObjects;
// const ab = {
//   a: "1",
//   b: "2"
// };
// const ba = {
//   b: "2",
//   a: "1"
// };
// const abab = {
//   a: "2",
//   b: "1"
// };
// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };

// // console.log(eqObjects(ab, ba)); // => true
// // console.log(eqObjects(ab, abc)); // => false
// // console.log(eqObjects(ab, abab)); // => false
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// const cd = {
//   c: "1",
//   d: ["2", 3]
// };
// const dc = {
//   d: ["2", 3],
//   c: "1"
// };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = {
//   c: "1",
//   d: ["2", 3, 4]
// };
// assertEqual(eqObjects(cd, cd2), false); // => false
// assertEqual((eqObjects(cd, dc)), true); // => true