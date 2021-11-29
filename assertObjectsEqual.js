const eqArrays = function(firstArr, secondArr) {

  let holderArrayOfTruths = [];
  let answer;

  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] === secondArr[i]) {
        holderArrayOfTruths.push(firstArr[i]);
      }
    } if (holderArrayOfTruths.length === firstArr.length) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    answer = false;
  }
  return answer;
};

const eqObjects = function(object1, object2) {

  let keySet = Object.keys(object1);
  let keySet2 = Object.keys(object2);
  let answer = true;

  if (keySet.length !== keySet2.length) {
    answer = false;
  } else if (keySet.length === keySet2.length) {
    for (const keyz of keySet) {
      if (object1[keyz] !== object2[keyz]) {
        answer = false;
      }
      if (Array.isArray(object1[keyz])) {
        answer = eqArrays(object2[keyz], object1[keyz]);
      }
    }
  }
  return answer;
};

const assertObjectsEqual = function(actual, expected) {

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertObjectsEqual({'key1': 1, 'key2': 2, 'key3': 3}, {'key1': 1, 'key2': 2, 'key3': 3});

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false