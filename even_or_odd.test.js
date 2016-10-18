var assert = require('chai').assert;
var even_or_odd = require('./even_or_odd.js');

describe('Even or Odd', function () {
  it('should return "even" or "odd"', function () {
    assert.equal(even_or_odd(2), "Even");
    assert.equal(even_or_odd(0), "Even");
    assert.equal(even_or_odd(7), "Odd");
    assert.equal(even_or_odd(1), "Odd");
  });
});


// CodeWars original Example Test
// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")
