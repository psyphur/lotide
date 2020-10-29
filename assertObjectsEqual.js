const eqObjects = (object1, object2) => {
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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const a = {a: 1, b: 2};
// const b = {a: 1, b: 2};
// const c = {a: 2, b: 1};


// assertObjectsEqual(a, b);
// assertObjectsEqual(b, c);