const middle = function(arrayEl) {
  
  let middleNum = [];
  
  if (arrayEl.length % 2 !== 0) {
    middleNum.push(arrayEl[Math.round(arrayEl.length / 2 - 1)]);
  }
  return middleNum;
};








console.log(middle(["Yo Yo", "Lighthouse", "Labs", "More", "Santa", "Clause"]));
















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