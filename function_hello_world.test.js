var chai = require('chai')
var assert = chai.assert;
var hello_world = require('./hello_world')

describe("Hello World", function(){
  it("should Hello World", function(){
    assert.equal("actual", "expected", "This is just an example of how you can write your own TDD tests");
  });
});
