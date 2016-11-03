var chai = require('chai');
var assert = chai.assert;
var square_every_digit = require('./Square_Every_Digit.js')

describe('Square_Every_Digit',function(){
  it('should return Square_Every_Digit',function(){
      assert.equal(squareDigits(9119), 811181);
  })
})
