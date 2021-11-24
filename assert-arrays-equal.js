
function eqArrays(actual, expected) {

  holderArrayOfTruths = [];
  let answer = "";

  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        holderArrayOfTruths.push(actual[i])
      } 
    } if (holderArrayOfTruths.length === actual.length){
      answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
      } else {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
      }
  } else {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return answer
}


console.logeq(Arrays([1, 2, 3], [1, 2, 3])) // => true
console.logeq(Arrays([1, 2, 3], [3, 2, 1])) // => false

console.logeq(Arrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false