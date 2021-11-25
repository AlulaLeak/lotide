function findKeyByValue(obj, value) {

  arrayPair = Object.entries(obj);

  for (let i = 0; i < arrayPair.length; i++) {
    if (arrayPair[i][1] === value) {
      return arrayPair[i][0];
    }
  }
}

const assertEqual = function (actual, expected) {

  let answer = [];

  if (actual === expected) {
    answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else if (actual !== expected) {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  return console.log(answer);
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"

};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

findKeyByValue(bestTVShowsByGenre, "The Wire")