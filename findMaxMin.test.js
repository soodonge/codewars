var chai = require('chai');
var assert = chai.assert;
var Obj = require('./findMaxMin.js');

Obj.min()
Obj.max()

describe("Test", function(){
  it("Examples", function(){
    assert.equal(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    assert.equal(min([42, 54, 65, 87, 0]), 0);
    assert.equal(max([4,6,2,1,9,63,-134,566]), 566);
    assert.equal(max([5]), 5);
  });
});
