function without(source, itemsToRemove) {
  let newArray = [];
  for (let l = 0; l < source.length; l++) {
    newArray.push(source[l]);
  }
  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[i] === itemsToRemove[k]) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]