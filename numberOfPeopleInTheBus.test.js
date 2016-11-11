var chai = require('chai');
var assert = chai.assert;
var numberOfPeopleInTheBus = require('./numberOfPeopleInTheBus.js');

describe('numberOfPeopleInTheBus', function(){
  it('should return numberOfPeopleInTheBus', function(){
    assert.equal(number([[10,0],[3,5],[5,8]]),5);
    assert.equal(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.equal(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
  })
})
