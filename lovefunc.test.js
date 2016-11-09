var chai = require('chai');
var assert = chai.asser;
var lovefunc = require('./lovefunc.js');

describe('lovefunc', function(){
  it('should return lovefunc',function(){
    assert.equal(lovefunc(1,4), true)
    assert.equal(lovefunc(2,2), false)
    assert.equal(lovefunc(0,1), true)
    assert.equal(lovefunc(0,0), false)    
  })

})
