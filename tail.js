
const tail = (arr) => {

  let tailArray = []
  for (let i = 1; i < arr.length; i++) {
    tailArray.push(arr[i])
    
  }

  return tailArray
}

const assertEqual = function (actual, expected) {

  let answer = "";

  if (actual === expected) {
    answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else if (actual !== expected) {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  return answer;
};

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!