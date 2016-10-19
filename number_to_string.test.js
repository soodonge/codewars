var chai = require('chai');
var assert = chai.assert;
var number_to_string = require('./number_to_string.js')

describe('Number To String',function(){

  it('should number to string',function(){
    assert.equal(number_to_string(67), '67');

  });
});
