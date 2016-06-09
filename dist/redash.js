(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Redash = {}));
}(this, function (exports) { 'use strict';

  var _curry1 = function _curry1 (fn) {
    return function __arity_1__ (a0) {
      return arguments.length ? fn(a0) : __arity_1__
    }
  }

  var _curry2 = function _curry2 (fn) {
    return function __arity_2__ (a0, a1) {
      switch (arguments.length) {
        case 0: return __arity_2__
        case 1: return _curry1(function __arity_1__ (b0) { return fn(a0, b0) })
        default: return fn(a0, a1)
      }
    }
  }

  /**
   * add : Number -> Number -> Number
   *
   * @description
   * Returns the sum of two numbers.
   *
   * @when
   * You should use this function when you wish to add two numbers together.
   *
   * @example
   * _.add(5)(2) // 7
   *
   * @example
   * const add3 = _.add(3)
   * add3(5) // 8
   */
  var add = _curry2(function add (a, b) {
    return a + b
  })

  var all = _curry2(function all (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (!fn(xs[i])) {
        return false
      }
    }
    return true
  })

  var any = _curry2(function any (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (fn(xs[i])) {
        return true
      }
    }
    return false
  })

  var _curry3 = function _curry3 (fn) {
    return function __arity_3__ (a0, a1, a2) {
      switch (arguments.length) {
        case 0: return __arity_3__
        case 1: return _curry2(function __arity_2__ (_a1, _a2) { return fn(a0, _a1, _a2) })
        case 2: return _curry1(function __arity_1__ (_a2) { return fn(a0, a1, _a2) })
        default: return fn(a0, a1, a2)
      }
    }
  }

  var assoc = _curry3(function assoc (p, v, o) {
    var b = {}
      , prop

    for (prop in o) {
      b[prop] = o[prop]
    }
    b[p] = v
    return b
  })

  var _concat = [].concat

  var concat = _curry2(function concat (as, bs) {
    return _concat.call(as, bs)
  })

  var _slice = [].slice

  // Credit to Ramda for this idea for creating curried functions that
  // properly report their arity via function.length.
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  var _arity = function _arity (arity, fn) {
    switch (arity) {
      case 0: return function __arity_0__ () { return fn.apply(this, arguments) }
      case 1: return function __arity_1__ (a0) { return fn.apply(this, arguments) }
      case 2: return function __arity_2__ (a0, a1) { return fn.apply(this, arguments) }
      case 3: return function __arity_3__ (a0, a1, a2) { return fn.apply(this, arguments) }
      case 4: return function __arity_4__ (a0, a1, a2, a3) { return fn.apply(this, arguments) }
      case 5: return function __arity_5__ (a0, a1, a2, a3, a4) { return fn.apply(this, arguments) }
      case 6: return function __arity_6__ (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
      case 7: return function __arity_7__ (a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments) }
      case 8: return function __arity_8__ (a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments) }
      case 9: return function __arity_9__ (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments) }
      case 10: return function __arity_10__ (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments) }
      default: throw new Error('Arity must be less than or equal to 10.')
    }
  }

  /**
   * @description
   * Curries a function to the specified arity. Receives an array of arguments
   * to treat as as already-supplied (meaning they count toward fulfilling
   * the target arity). The resulting function will combine the existing
   * arguments with those from the latest call, and if the resulting length
   * is greater than or equal to the target arity, the original function will
   * be called with those arguments. If the number of arguments is still
   * smaller than the required amount, the function will be curried again.
   *
   * @param {Number} arity - the target arity
   * @param {Number} applied - the array of already-applied arguments
   * @param {Function} fn - the function to be called once all arguments are supplied
   * @returns {Function}
   */
  var _curryN = function _curryN (arity, applied, fn) {
    return _arity(arity, function () {
      var newApplied = applied
        , i

      if (arguments.length) {
        newApplied = _slice.call(applied)
        for (i = 0; i < arguments.length; i++) {
          newApplied.push(arguments[i])
        }
      }

      return newApplied.length >= arity
        ? fn.apply(null, newApplied)
        : _curryN(arity, newApplied, fn)
    })
  }

  var curryN = _curry2(function curryN (arity, fn) {
    switch (arity) {
      case 0: return fn
      case 1: return _curry1(fn)
      case 2: return _curry2(fn)
      case 3: return _curry3(fn)
      default: return _curryN(fn.length, [], fn) 
    }
  })

  var compose = function compose () {
    var fns = arguments
      , i   = fns.length - 1
      , fn  = fns[i--]

    return curryN(fn.length, function __composition__ () {
      var y = fn.apply(null, arguments)

      for (; i >= 0; i--) {
        y = fns[i](y)
      }
      return y
    })
  }

  var curry = function curry (fn) {
    switch (fn.length) {
      case 0: return fn
      case 1: return _curry1(fn)
      case 2: return _curry2(fn)
      case 3: return _curry3(fn)
      default: return _curryN(fn.length, [], fn) 
    }
  }

  var dec = function dec (a) {
    return a - 1
  }

  var _equals = function _equals (a, b) {
    return a === b
  }

  var equals = _curry2(function equals (a, b) {
    return _equals(a, b)
  })

  var filter = _curry2(function filter (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x

    for (; i < len; i++) {
      x = xs[i]
      if (fn(x)) {
        ys.push(x)
      }
    }
    return ys
  })

  var find = _curry2(function find (pred, xs) {
    var i   = 0
      , len = xs.length
      , x

    for (; i < len; i++) {
      x = xs[i]
      if (pred(x)) {
        return x
      }
    }
  })

  var findIndex = _curry2(function findIndex (pred, xs) {
    var i   = 0
      , len = xs.length
        
    for (; i < len; i++) {
      if (pred(xs[i])) {
        return i
      }
    }
    return -1
  })

  var flatMap = _curry2(function flatMap (fn, xs) {
    var i   = 0
      , len = xs.length
      , bs  = []
      , _i
      , b

    for (; i < len; i++) {
      b = fn(xs[i])
      if (Array.isArray(b)) {
        for (_i = 0; _i < b.length; _i++) {
          bs.push(b[_i])
        }
      } else {
        bs.push(b)
      }
    }

    return bs
  })

  var flatten = function flatten (xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x
      , _i

    for (; i < len; i++) {
      x = xs[i]
      if (Array.isArray(x)) {
        for (_i = 0; _i < x.length; _i++) {
          ys.push(x[_i])
        }
      } else {
        ys.push(x)
      }
    }

    return ys
  }

  var flattenDeep = function flattenDeep (xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x

    for (; i < len; i++) {
      x  = Array.isArray(xs[i]) ? flattenDeep(xs[i]) : xs[i]
      ys = ys.concat(x)
    }

    return ys
  }

  var forEach = _curry2(function forEach (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      fn(xs[i])
    }
  })

  var fromPairs = function fromPairs (xs) {
    var y   = {}
      , i   = 0
      , len = xs.length
      , x

    for (; i < len; i++) {
      x = xs[i]
      y[x[0]] = x[1]
    }

    return y
  }

  var head = function head (xs) {
    return xs[0]
  }

  var identity = function (a) {
    return a
  }

  var inc = function inc (a) {
    return a + 1
  }

  var indexOf = _curry2(function indexOf (y, xs) {
    var i   = 0
      , len = xs.length
        
    for (; i < len; i++) {
      if (xs[i] === y) {
        return i
      }
    }
    return -1
  })

  var keys = Object.keys

  var last = function last (xs) {
    return xs[xs.length - 1]
  }

  /**
   * add : (a -> b) -> [a] -> [b]
   *
   * @description
   * Applies a transformation to every item in an array, returning a new
   * array of the same size where each item has been transformed.
   *
   * @when
   * You should use this function when you wish to apply a common transformation
   * to every item in an array. For example, if you have an array of objects
   * and want a new array containing only a certain property from each object.
   *
   * @example
   * _.map((a) => a + 5, [1,2,3,4,5]) // [6,7,8,9,10]
   *
   * @example
   * _.map((a) => a.id, [{ id: 1 }, { id: 2 }, { id: 3 }]) // [1,2,3]
   *
   * @example
   * const add5 = _.add(5)
   * const mapAdd5 = _.map(add5)
   * mapAdd5([1,2,3,4]) // [6,7,8,9]
   */
  var map = _curry2(function map (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = new Array(len)

    for (; i < len; i++) {
      ys[i] = fn(xs[i])
    }
    return ys
  })

  /**
   * Merges all own properties of the first object into the second.
   */
  var merge = _curry2(function merge (a, b) {
    var y = {}
      , prop

    for (prop in b) {
      if (b.hasOwnProperty(prop)) {
        y[prop] = b[prop]
      }
    }
    for (prop in a) {
      if (a.hasOwnProperty(prop)) {
        y[prop] = a[prop]
      }
    }
    return y
  })

  var not = function not (a) {
    return !a
  }

  var of = function of (x) {
    return [x]
  }

  var pipe = function pipe () {
    var fns = arguments
      , len = fns.length

    return _curryN(fns[0].length, [], function __pipe__ () {
      var i = 0
        , y = fns[i++].apply(null, arguments)

      for (; i < len; i++) {
        y = fns[i](y)
      }
      return y
    })
  }

  var prop = _curry2(function prop (p, x) {
    return x[p]
  })

  var propEq =  _curry3(function propEq (p, y, x) {
    return x[p] === y
  })

  var rangeBy = _curry3(function rangeBy (inc, i, end) {
    var ys = []

    for (; i < end; i += inc) {
      ys.push(i)
    }
    return ys
  })

  var range = rangeBy(1)

  var reduce = _curry3(function reduce (fn, y, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      y = fn(y, xs[i])
    }
    return y
  })

  var reduceRight = _curry3(function reduceRight (fn, y, xs) {
    var i = xs.length - 1

    for (; i >= 0; i--) {
      y = fn(y, xs[i])
    }
    return y
  })

  var reject = _curry2(function reject (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x

    for (; i < len; i++) {
      x = xs[i]
      if (!fn(x)) {
        ys.push(x)
      }
    }
    return ys
  })

  var _reverse = [].reverse

  var reverse = function reverse (xs) {
    return _reverse.call(xs.slice(0))
  }

  var tail = function tail (xs) {
    return xs.slice(1)
  }

  var take = _curry2(function take (n, xs) {
    return xs.slice(0, n)
  })

  var takeUntil = _curry2(function takeUntil (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (fn(xs[i])) {
        return xs.slice(0, i)
      }
    }
    return xs.slice(0)
  })

  var times = _curry2(function times (fn, n) {
    var i  = 0
      , bs = []

    for (; i < n; i++) {
      bs.push(fn(i))
    }
    return bs
  })

  var toLower = function toLower (a) {
    return a.toLowerCase()
  }

  var toUpper = function toUpper (a) {
    return a.toUpperCase()
  }

  var tap = function (fn) {
    return function tapped (a) {
      fn(a)
      return a
    }
  }

  var toPairs = function toPairs (a) {
    var ys = []
      , p

    for (p in a) {
      if (a.hasOwnProperty(p)) {
        ys.push([p, a[p]])
      }
    }
    return ys
  }

  var without = _curry2(function without (as, bs) {
    var ys    = []
      , bi    = 0
      , aslen = as.length
      , bslen = bs.length
      , ai
      , b
      , discard

    for (; bi < bslen; bi++) {
      b = bs[bi]
      discard = false
      for (ai = 0; ai < aslen; ai++) {
        if (b == as[ai]) {
          discard = true
          break
        }
      }
      if (!discard) {
        ys.push(b)
      }
    }
    return ys
  })

  var zip = _curry2(function zip (as, bs) {
    var i   = 0
      , len = Math.min(as.length, bs.length)
      , ys  = new Array(len)

    for (; i < len; i++) {
      ys[i] = [as[i], bs[i]]
    }
    return ys
  })

  var zipObj = _curry2(function zipObj (keys, vals) {
    var i   = 0
      , len = Math.min(keys.length, vals.length)
      , res = {}

    for (; i < len; i++) {
      res[keys[i]] = vals[i]
    }
    return res
  })

  exports.add = add;
  exports.all = all;
  exports.any = any;
  exports.assoc = assoc;
  exports.concat = concat;
  exports.compose = compose;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.dec = dec;
  exports.equals = equals;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.flatMap = flatMap;
  exports.flatten = flatten;
  exports.flattenDeep = flattenDeep;
  exports.forEach = forEach;
  exports.fromPairs = fromPairs;
  exports.head = head;
  exports.identity = identity;
  exports.inc = inc;
  exports.indexOf = indexOf;
  exports.keys = keys;
  exports.last = last;
  exports.map = map;
  exports.merge = merge;
  exports.not = not;
  exports.of = of;
  exports.pipe = pipe;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.range = range;
  exports.rangeBy = rangeBy;
  exports.reduce = reduce;
  exports.foldl = reduce;
  exports.reduceRight = reduceRight;
  exports.foldr = reduceRight;
  exports.reject = reject;
  exports.reverse = reverse;
  exports.tail = tail;
  exports.take = take;
  exports.takeUntil = takeUntil;
  exports.times = times;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.tap = tap;
  exports.toPairs = toPairs;
  exports.without = without;
  exports.zip = zip;
  exports.zipObj = zipObj;

}));