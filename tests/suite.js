'use strict';
const _      = require('../es5');
const assert = require('assert');

// --------------------------
// Currying
// --------------------------
describe('Curry', function () {
  describe('_.curry()', function () {
    it('Should partially apply a binary function when supplied with one argument.', function () {
      assert.equal('function', typeof _.curry(add, 2));
    });
    it('Should execute the partially applied binary function when supplied with its second argument.', function () {
      assert.equal(10, _.curry(add,2)(8));
    });

    it('Should partially apply a quaternary function when provided with less than 3 arguments.', function () {
      assert.equal('function', typeof _.curry(quaternary,1,2,3));
    });
    it('Should reapply a quaternary function until it receives all arguments.', function () {
      assert.equal('function', typeof _.curry(quaternary)(1,2));
      assert.equal('function', typeof _.curry(quaternary)(1,2)(3));
      assert.equal(10, _.curry(quaternary)(1,2)(3)(4));
    });
  });
});

// --------------------------
// Composition
// --------------------------
describe('Composition', function () {

  describe('_.pipe()', function () {
    it('Should return a function.', function () {
      assert.equal('function', typeof _.pipe(square, double));
    });

    it('Should apply the functions left to right.', function () {
      let squareThenDouble = _.pipe(square, double);

      assert.equal(8, squareThenDouble(2));
      assert.equal(32, squareThenDouble(4));
    });
  });

  describe('_.compose()', function () {
    it('Should return a function.', function () {
      assert.equal('function', typeof _.compose(square, double));
    });

    it('Should apply the functions right to left.', function () {
      let doubleThenSquare = _.compose(square, double);

      assert.equal(16, doubleThenSquare(2));
      assert.equal(64, doubleThenSquare(4));
    });
  });
});

// --------------------------
// Functions
// --------------------------
describe('Functions', function () {

  describe('not()', function () {
    it('should negate the result of a function.', function () {

      assert.equal(false, _.not(_.eq(false))(false));
      assert.equal(false, _.not(_.eq)(false, false));
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

  describe('.get()', function () {
    let obj = { foo : 'foo' };

    it('Should return the specified property off of the object.', function () {
      assert.equal('foo', _.get('foo', obj));
      assert.equal('foo', _.get('foo')(obj));
    });

    it('Should return undefined if the property does not exist.', function () {
      assert.equal(undefined, _.get('bar', obj));
      assert.equal(undefined, _.get('bar')(obj));
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

  describe('should return the type of a supplied variable.', function () {
    assert.equal('undefined', _.type(undefined));
    assert.equal('object', _.type({}));
    assert.equal('number', _.type(1));
    assert.equal('string', _.type('foo'));
  });
});

// --------------------------
// Strings
// --------------------------
describe('Strings', function () {

  describe('split()', function () {
    it('Should split a string by a specified delimiter.', function () {
      assert.deepEqual(['hello', 'there'], _.split(' ', 'hello there'));
      assert.deepEqual(['hello', 'there'], _.split(' ')('hello there'));
    });
  });

  describe('lower()', function () {
    it('Should lowercase an entire string.', function () {
      assert.equal('hello', _.lower('HELLO'));
      assert.equal('hello test!1', _.lower('HELLO TeSt!1'));
    });
  });

  describe('upper()', function () {
    it('Should uppercase an entire string.', function () {
      assert.equal('HELLO', _.upper('hello'));
      assert.equal('HELLO TEST!1', _.upper('hello test!1'));
    });
  });

  describe('proper()', function () {
    it('Should capitilize the first character in a string, and lowercase the rest.', function () {
      assert.equal('Hello', _.proper('Hello'));
      assert.equal('Hello', _.proper('hELLO'));
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

  describe('eq()', function () {

    it('Should return true only if the values are strictly equal.', function () {
      assert.equal(true, _.eq(2, 2));
      assert.equal(false, _.eq(2, '2'));
      assert.equal(true, _.eq('test', 'test'));
      assert.equal(false, _.eq(false, 0));
      assert.equal(false, _.eq(true, 1));
      assert.equal(false, _.eq(true, '1'));
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
