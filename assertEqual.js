const assertEqual = function(actual, expected) {

  let answer = "";

  if (actual === expected) {
    answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else if (actual !== expected) {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  return console.log(answer);
};

module.exports = assertEqual;
