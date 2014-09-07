var _ = require('../functional'),
    assert = require('assert');

// --------------------------
// Compositions
// --------------------------
describe('Compose', function() {
  describe('_.compose()', function() {
    it('Should return the composition of n-functions as a single function.', function() {
      assert.equal('function', typeof _.compose(square, double));
    });
    it('Should return the square of the 4 :: _.compose(square, double)(2).', function() {
      assert.equal(16, _.compose(square, double)(2));
    });
  })
});

// --------------------------
//  Helpers
// --------------------------
var add    = function(a,b) { return a + b; },
    square = function(x) { return x * x; },
    double = function(x) { return x << 1; },
    triple = function(x) { return x * 3; };