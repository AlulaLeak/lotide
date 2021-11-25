

const letterPositions = function (sentance) {

  sentance = sentance.split(' ').join('').toLowerCase();

  let alphabet = {
    "a": [],
    "b": [],
    "c": [],
    "d": [],
    "e": [],
    "f": [],
    "g": [],
    "h": [],
    "i": [],
    "j": [],
    "k": [],
    "l": [],
    "m": [],
    "n": [],
    "o": [],
    "p": [],
    "q": [],
    "r": [],
    "s": [],
    "t": [],
    "u": [],
    "v": [],
    "w": [],
    "x": [],
    "y": [],
    "z": [],
  };

  for (let i in alphabet) {
    for (let k = 0; k < sentance.length + 1; k++) {
      if (sentance[k] === i) {
        alphabet[i].push(k);
      }
    }
  }
  for (let i in alphabet) {
    if (alphabet[i].length == 0) {
      delete alphabet[i];
    }
  }
  return alphabet
}

console.log(letterPositions('I love Tomato Juice'));