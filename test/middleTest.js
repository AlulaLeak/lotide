const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(middle(['5']), '5');
  });
  it("returns [] for ['5', '6']", () => {
    assert.deepEqual(middle(['5', '6']), []);
  });

});