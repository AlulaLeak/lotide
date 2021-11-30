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

module.exports = eqArrays;