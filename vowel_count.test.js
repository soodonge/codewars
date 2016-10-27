var chai = require('chai');
var assert = chai.assert;
var vowel_count = require('./vowel_count.js');

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.equal(getCount("abracadabra"), 5)
    });
});
