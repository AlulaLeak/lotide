const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 2, 3], [1, 3, 3]); // fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass