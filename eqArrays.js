const assertEqual = function(actual, expected) {

  let answer = "";

  if (actual === expected) {
    answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else if (actual !== expected) {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  return console.log(answer);
};


function eqArrays(firstArr, secondArr) {

  holderArrayOfTruths = [];

  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] === secondArr[i]) {
        holderArrayOfTruths.push(firstArr[i]);
      }
    } if (holderArrayOfTruths.length === firstArr.length) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false