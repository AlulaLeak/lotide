const takeUntil = function(array, callback) {

  newArray = [];
  let i = 0;

  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
    if (callback(array[i])){
      newArray.pop();
      break;
    }
  }
  
  console.log(newArray)
}

const arr = [1,2,2,3,4,5,4,5,9]

takeUntil(arr, x => x > 4);