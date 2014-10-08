var _      = require('../functional'),
    assert = require('assert');

// --------------------------
// Curry / Partial Application
// --------------------------
describe('Curry/Partial Application', function () {
  describe('_.curry()', function () {
    // TODO
  });

  describe('_.partial()', function () {
    it('should partially apply a binary function', function () {
      assert.equal('function', typeof _.partial(add, 2));
    });
    it('should execute the partially applied binary function when supplied with its second argument', function () {
      assert.equal(10, _.partial(add,2)(8));
    });

    it('should partially apply a quaternary function', function () {
      assert.equal('function', typeof _.partial(quaternary,1,2,3));
    });
    it('should reapply a quaternary function until it receives all arguments', function () {
      assert.equal('function', typeof _.partial(quaternary)(1,2));
      assert.equal('function', typeof _.partial(quaternary)(1,2)(3));
      assert.equal(10, _.partial(quaternary)(1,2)(3)(4));
    });
  });
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
      nested = [1,2,[4,5,6,7],[8,[9,10,11]],12],
      simpleNested = [1,[2,3],4,[5,6]];

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

  // describe('_.flatten()', function () {
  //   it('should flatten top-level nested arrays (no deep flattening)', function () {
  //     assert.deepEqual([1,2,3,4,5,6], _.flatten(simpleNested));
  //   });
  // });

  describe('_.toArray()', function () {
    it('Should transform an array-like object into an array (in this case the \'argument\` object).', function () {
      assert.deepEqual(['foo','bar','baz'], _.toArray(function () {
        return arguments;
      }('foo','bar','baz')));
    });
  });
});

// --------------------------
// Common / Utility
// --------------------------
describe('Common / Utility', function () {
  describe('_.log()', function () {
    it('should return the value in addition to logging it.', function () {
      var str = 'sample log output';
      assert.equal(str, _.log(str));
    });
  });

  describe('_.get()', function () {
    it('should get a top-level property from an object', function () {
      var obj = { key : 'myvalue' };

      assert.equal('myvalue', _.get('key', obj));
    });

    it('should auto-curry', function () {
      var obj = { key : 'myvalue' };

      assert.equal('function', typeof _.get('key'));
      assert.equal('myvalue', _.get('key')(obj));
    });
  });

  describe('_.get()', function () {
    var obj = {
      key : {
        subKey : {
          value : 'myvalue'
        }
      }
    };

    it('should find a nested property using dot notation', function () {
      assert.equal('myvalue', _.get('key.subKey.value', obj));
    });
  });

});

// --------------------------
//  Helpers
// --------------------------
var add    = function(a,b) {return a + b; },
    square = function(x) { return x * x; },
    double = function(x) { return x << 1; },
    triple = function(x) { return x * 3; },
    quaternary = function (a,b,c,d) {
      return a + b + c + d;
    };