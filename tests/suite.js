var _ = require('../functional'),
    assert = require('assert');

// --------------------------
// Curry
// --------------------------
describe('Curry', function() {
  describe('_.curry()', function() {
    it('Should return a partially applied function.', function() {
      assert.equal('function', typeof _.curry(add, 5));
    });
    it('Should return the result of a curried add function.', function() {
      assert.equal(13, _.curry(add,5)(8));
    });
  });
});

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
// Array Helpers
// --------------------------
describe('Array Helpers', function() {
  var array = [1,2,3,4,5,6,7,8,9,10];

  describe('_.inArray()', function() {
    it('Should return true when an item is found in the array.', function() {
      assert.equal(true, _.inArray(array, 5));
    });
    it('Should return false when an item isn\'t found in the array.', function() {
      assert.equal(false, _.inArray(array, 20));
    });
  });

  describe('_.toArray()', function() {
    it('Should transform an array-like object into an array.', function() {
      assert.deepEqual(['foo','bar','baz'], _.toArray(function() {
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