const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle(["Yo Yo", "Lighthouse", "Labs", "More", "Santa"]), ["Labs"]);
assertArraysEqual(middle(["Yo Yo", "Lighthouse", "Labs", "More", "Santa", "Clause"]), ["Labs"]);
