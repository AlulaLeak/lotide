function countOnly(allItems, itemsToCount) {
  
  for (let i in itemsToCount) {
    if (itemsToCount[i] === true) // Not needed but double check lol
      for (let k = 0; k < allItems.length; k++) {
        if (allItems[k] === i) {
          itemsToCount[i] += 1;
        }
      }
  }
  for (let i in itemsToCount) {
    if (itemsToCount[i] === true || itemsToCount[i] === false) {
      delete itemsToCount[i];
    }
  }
  for (let i in itemsToCount) {
    itemsToCount[i] -= 1;
  }
    
  return itemsToCount;
}

console.log(countOnly(
  ['a', 'a', 'b', 'c', 'd', 'e', 'd', 'a', 'a', 'a', 'a'],
  { 'a': true, 'd': true, 'b': false, 'f': true, 'k': true }
));

const assertEqual = function(actual, expected) {

  let answer = "";

  if (actual === expected) {
    answer = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;

  } else if (actual !== expected) {
    answer = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  return console.log(answer);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

