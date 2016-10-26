var chai = require('chai');
var assert = chai.assert;
var disemvowel = require('./Disemvowel_Trolls.js')

describe('Disemvowel_Trolls', function(){
  it('should return Disemvowel_Trolls', function(){
    assert.equal(disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!")
  })
})
