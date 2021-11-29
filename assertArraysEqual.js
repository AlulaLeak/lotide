let eqArrays = function(firstArr, secondArr) {

  let holderArrayOfTruths = [];

  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] === secondArr[i]) {
        holderArrayOfTruths.push(firstArr[i]);
      }
    } if (holderArrayOfTruths.length === firstArr.length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertArraysEqual([1, 2, 3], [1, 3, 3]);