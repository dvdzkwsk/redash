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
// Objects
// --------------------------
describe('Objects', function () {
  let obj = { foo : false, val : 'test' };

  let proto = function () {};
  proto.prototype.notOwn = function () {};
  let instance = new proto();
  instance.own = 'test';

  describe('.has()', function () {
    it('Should return a curried function when only a key is provided', function () {
      assert.equal('function', typeof _.has('key'));
    });

    it('Should return true when an object has specified key.', function () {
      assert.equal(true, _.has('foo', obj));
      assert.equal(true, _.has('own', instance));
    });

    it('Should return false when an object doesn\'t have the specified key.', function () {
      assert.equal(false, _.has('bar', obj));
    });

    it('Should return false if the property is from a prototype.', function () {
      assert.equal(false, _.has('notOwn', instance));
    });
  });
});

// --------------------------
// Utility
// --------------------------
describe('Utility', function () {

  describe('mixin()', function () {
    let base = { foo : 'foo' };
    let extend = { foo : 'baz', bar : 'bar' };

    it('Should not mutate either object.', function () {
      let mixed = _.mixin(base, extend);
      mixed.foo = 'biz';

      assert.equal('biz', mixed.foo);
      assert.equal('foo', base.foo);
      assert.equal('baz', extend.foo);
    });

    it('Should assign properties from extender onto the base object.', function () {
      let mixed = _.mixin(base, extend);

      assert.equal('bar', mixed.bar);
    });

    it('Should not override properties on the base object.', function () {
      let mixed = _.mixin(base, extend);

      assert.equal('foo', mixed.foo);
    });
  });

  describe('extend()', function () {
    let base = { foo : 'foo' };
    let extend = { foo : 'baz', bar : 'bar' };

    it('Should not mutate either object', function () {
      let extended = _.extend(base, extend);
      extended.foo = 'biz';

      assert.equal('biz', extended.foo);
      assert.equal('foo', base.foo);
      assert.equal('baz', extend.foo);
    });

    it('Should assign properties from extender onto the base object.', function () {
      let extended = _.extend(base, extend);

      assert.equal('bar', extended.bar);
    });

    it('Should override properties on the base object.', function () {
      let extended = _.extend(base, extend);

      assert.equal('baz', extended.foo);
    });
  });
});

// --------------------------
// Comparators
// --------------------------
describe('Comparators', function () {

  describe('is()', function () {

    it('Should return true when a number is compared to "number"', function () {
      assert.equal(true, _.is('number', 2));
    });

    it('Should return false when a truthy number ("2") is compared to "number"', function () {
      assert.equal(false, _.is('number', "2"));
    });
  });

  describe('equals()', function () {

    it('Should return true only if the values are strictly equal.', function () {
      assert.equal(true, _.equals(2, 2));
      assert.equal(false, _.equals(2, '2'));
      assert.equal(true, _.equals('test', 'test'));
    });

    it('Should return false if the values are _only_ truthy.', function () {
      assert.equal(false, _.equals(2, '2'));
      assert.equal(false, _.equals(false, 0));
      assert.equal(false, _.equals(true, 1));
      assert.equal(false, _.equals(true, '1'));
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
