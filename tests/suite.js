var _      = require('../functional'),
    assert = require('assert');

// --------------------------
// Curry
// --------------------------
describe('Curry', function () {
  // TODO
});

describe('Partial', function () {

});

// --------------------------
// Compositions
// --------------------------
describe('Compose', function () {
  describe('_.compose()', function () {
    it('Should return the composition of n-functions as a single function.', function () {
      assert.equal('function', typeof _.compose(square, double));
    });
    it('Should return the square of the 4 :: _.compose(square, double)(2).', function () {
      assert.equal(16, _.compose(square, double)(2));
    });
  })
});

// --------------------------
// Array Helpers
// --------------------------
describe('Array Helpers', function () {
  var array  = [1,2,3,4,5,6,7,8,9,10],
      nested = [1,2,[4,5,6,7],[8,[9,10,11]],12];

  describe('_.inArray()', function () {
    it('Should return true when an item is found in the array.', function () {
      assert.equal(true, _.inArray(5, array));
    });
    it('Should return false when an item isn\'t found in the array.', function () {
      assert.equal(false, _.inArray(20, array));
    });
    it('Should find an item in a nested array', function () {
      assert.equal(true, _.inArray(10, array));
    });
  });

  describe('_.toArray()', function () {
    it('Should transform an array-like object into an array (in this case the \'argument\` object).', function () {
      assert.deepEqual(['foo','bar','baz'], _.toArray(function () {
        return arguments;
      }('foo','bar','baz')));
    });
  });
});

// --------------------------
//  Helpers
// --------------------------
var add    = function(a,b) { return a + b; },
    square = function(x) { return x * x; },
    double = function(x) { return x << 1; },
    triple = function(x) { return x * 3; };