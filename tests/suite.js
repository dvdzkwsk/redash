'use strict';
const _      = require('../es5');
const assert = require('assert');

// --------------------------
// Currying
// --------------------------
describe('Curry', function () {
  describe('_.curry()', function () {
    it('should partially apply a binary function when supplied with one argument.', function () {
      assert.equal('function', typeof _.curry(add, 2));
    });
    it('should execute the partially applied binary function when supplied with its second argument.', function () {
      assert.equal(10, _.curry(add,2)(8));
    });

    it('should partially apply a quaternary function when provided with less than 3 arguments.', function () {
      assert.equal('function', typeof _.curry(quaternary,1,2,3));
    });
    it('should reapply a quaternary function until it receives all arguments.', function () {
      assert.equal('function', typeof _.curry(quaternary)(1,2));
      assert.equal('function', typeof _.curry(quaternary)(1,2)(3));
      assert.equal(10, _.curry(quaternary)(1,2)(3)(4));
    });
  });
});

// --------------------------
// Collections
// --------------------------
describe('Collections', function () {
  let array  = [1,2,3,4,5,6,7,8,9,10];
  let nested = [1,2,[4,5,6,7],[8,[9,10,11]],12];

  describe('_.contains()', function () {
    it('Should return true when an item is found in the array.', function () {
      assert.equal(true, _.contains(5, array));
    });
    it('Should return false when an item isn\'t found in the array.', function () {
      assert.equal(false, _.contains(20, array));
    });
  });
});

// --------------------------
//  Helpers
// --------------------------
const add    = function(a,b) {return a + b; };
const square = function(x) { return x * x; };
const double = function(x) { return x << 1; };
const triple = function(x) { return x * 3; };
const quaternary = function (a,b,c,d) {
  return a + b + c + d;
};
