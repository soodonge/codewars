var chai = require('chai');
var assert = chai.assert;
var sumOfPositive = require('./sumOfPositive');

descrive('sum of positive', function(){
  it('should return sum of posivie',function(){
    assert.equal(positiveSum([1,2,3,4,5]),15);
    assert.equal(positiveSum([1,-2,3,4,5]),13);
    assert.equal(positiveSum([]),0);
    assert.equal(positiveSum([-1,-2,-3,-4,-5]),0);
    assert.equal(positiveSum([-1,2,3,4,-5]),9);
  })
})
