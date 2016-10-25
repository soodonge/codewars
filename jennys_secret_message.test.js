var chai = require('chai')
var assert = chai.assert;
var greet = require('./jennys_secret_message.js')

describe("Jenny's greeting function", function(){
  it("should greet some people normally",function(){
    assert.equals(greet("Jim"), "Hello, Jim!");
    assert.equals(greet("Jane"), "Hello, Jane!");
    assert.equals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special",function(){
    assert.equals(greet("Johnny"), "Hello, my love!");
  });
});
