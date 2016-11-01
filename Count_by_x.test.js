var chai = require('chai');
var assert = chai.assert;
var countBy = require('./Count_by_x.js');

describe('Count by x', function(){
  it('should return Count by x', function(){
    assert.similar(countBy(1,5), [1,2,3,4,5], "Array does not match")
    assert.similar(countBy(2,5), [2,4,6,8,10], "Array does not match")

  })
})
