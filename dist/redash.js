(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Redash = {}));
}(this, function (exports) { 'use strict';

  function _curry1 (fn) {
    return function __curried_unary__ (a0) {
      return arguments.length ? fn(a0) : __curried_unary__
    }
  }

  function _curry2 (fn) {
    return function __curried_binary__ (a0, a1) {
      switch (arguments.length) {
        case 0: return __curried_binary__
        case 1: return _curry1(function __curried_unary__ (b0) {
          return fn(a0, b0)
        })
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
   * @since v0.1.0
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

  /**
   * all : (a -> Boolean) -> [a] -> Boolean
   *
   * @since v0.7.0
   */
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

  /**
   * always : a -> * -> a
   *
   * @since v0.9.0
   */
  function always (x) {
    return function () {
      return x
    }
  }

  /**
   * any : (a -> Boolean) -> [a] -> Boolean
   *
   * @since v0.7.0
   */
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

  var _concat = [].concat

  /**
   * append : a -> [a] -> [a]
   *
   * @since v0.10.0
   */
  var append = _curry2(function append (x, xs) {
    return _concat.call(xs, [x])
  })

  function _curry3 (fn) {
    return function _curried_ternary__ (a0, a1, a2) {
      switch (arguments.length) {
        case 0: return _curried_ternary__
        case 1: return _curry2(function __curried_binary__ (_a1, _a2) {
          return fn(a0, _a1, _a2)
        })
        case 2: return _curry1(function __curried_unary__ (_a2) {
          return fn(a0, a1, _a2)
        })
        default: return fn(a0, a1, a2)
      }
    }
  }

  /**
   * assoc : String -> * -> {k:v} -> {k:v}
   *
   * @since v0.6.0
   */
  var assoc = _curry3(function assoc (p, v, o) {
    var b = {}
      , prop

    for (prop in o) {
      b[prop] = o[prop]
    }
    b[p] = v
    return b
  })

  /**
   * concat : [a] -> [a] -> [a]
   *
   * @since v0.7.0
   */
  var concat = _curry2(function concat (as, bs) {
    return _concat.call(as, bs)
  })

  /**
   * complement : (*... -> Boolean) -> (*... -> Boolean)
   *
   * @since v0.9.0
   */
  function complement (fn) {
    return function () {
      return !fn.apply(this, arguments)
    }
  }

  var _reverse = [].reverse

  var _slice = [].slice

  // Credit to Ramda for this idea for creating curried functions that
  // properly report their arity via function.length.
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  function _arity (arity, fn) {
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

  /**
   * pipe : ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z
   *
   * @since v0.1.0
   */
  function pipe () {
    var fns = arguments
      , len = fns.length

    return _curryN(fns[0].length, [], function () {
      var i = 0
        , y = fns[i++].apply(null, arguments)

      for (; i < len; i++) {
        y = fns[i](y)
      }
      return y
    })
  }

  /**
   * compose : (y -> z), ..., (g -> h), (a, b, ..., f -> g) -> (a, b, ..., f -> z)
   *
   * @since v0.1.0
   */
  function compose () {
    return pipe.apply(this, _reverse.call(arguments))
  }

  /**
   * curryN : Number n -> (a, b, ..., n -> v) -> a -> b -> ... -> n -> v
   *
   * @since v0.1.0
   */
  var curryN = _curry2(function curryN (arity, fn) {
    switch (arity) {
      case 0: return fn
      case 1: return _curry1(fn)
      case 2: return _curry2(fn)
      case 3: return _curry3(fn)
      default: return _curryN(fn.length, [], fn)
    }
  })

  /**
   * curry : (a, b, ..., j -> v) -> a -> b -> ... -> j -> v
   *
   * @since v0.1.0
   */
  function curry (fn) {
    return curryN(fn.length, fn)
  }

  /**
   * dec : Number -> Number
   *
   * @since v0.6.0
   */
  function dec (a) {
    return a - 1
  }

  /**
   * dissoc : String -> {k:v} -> {k:v}
   *
   * @since v0.10.0
   */
  var dissoc = _curry2(function dissoc (prop, obj) {
    var y = {}
      , p

    for (p in obj) {
      if (p !== prop) {
        y[p] = obj[p]
      }
    }
    return y
  })

  /**
   * drop : Number -> Array -> Array
   *
   * @since v0.10.0
   */
  var drop = _curry2(function drop (n, xs) {
    return _slice.call(xs, n)
  })

  function _equals (a, b) {
    return a === b
  }

  /**
   * equals : a -> a -> Boolean
   *
   * @since v0.7.0
   */
  var equals = _curry2(function equals (a, b) {
    return _equals(a, b)
  })

  /**
   * filter : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
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

  /**
   * find : (a -> Boolean) -> [a] -> a | undefined
   *
   * @since v0.6.0
   */
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

  /**
   * findIndex : (a -> Boolean) -> [a] -> Number
   *
   * @since v0.1.0
   */
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

  /**
   * flatMap : (a -> b | [b]) -> [a] -> [b]
   *
   * @since v0.1.0
   */
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

  /**
   * flatten : [[a]] -> [a]
   *
   * @since v0.1.0
   */
  function flatten (xs) {
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

  /**
   * flattenDeep : [[a]] -> [a]
   *
   * @since v0.5.0
   */
  function flattenDeep (xs) {
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

  /**
   * flip : (a -> b -> c -> ... -> z) -> (z -> ... -> c -> b -> a)
   *
   * @since v0.10.0
   */
  function flip (fn) {
    return curryN(fn.length, function () {
      return fn.apply(this, _reverse.call(arguments))
    })
  }

  /**
   * forEach : (a -> *) -> [a] -> undefined
   * @since v0.1.0
   */
  var forEach = _curry2(function forEach (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      fn(xs[i])
    }
  })

  /**
   * fromPairs : [[k, v]] -> {k:v}
   *
   * @since v0.7.0
   */
  function fromPairs (xs) {
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

  /**
   * head : [a] -> a
   *
   * @since v0.1.0
   */
  function head (xs) {
    return xs[0]
  }

  /**
   * identity : a -> a
   *
   * @since v0.6.0
   */
  function identity (a) {
    return a
  }

  /**
   * inc : Number -> Number
   *
   * @since v0.6.0
   */
  function inc (a) {
    return a + 1
  }

  /**
   * indexOf : a -> [a] -> Number
   *
   * @since v0.1.0
   */
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

  /**
   * keys : {k:v} -> [k]
   *
   * @since v0.1.0
   */
  function keys (object) {
    return Object.keys(object)
  }

  /**
   * last : [a] -> a
   *
   * @since v0.1.0
   */
  function last (xs) {
    return xs[xs.length - 1]
  }

  /**
   * map : (a -> b) -> [a] -> [b]
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
   * @since v0.1.0
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
   * merge : {k:v} -> {k:v} -> {k:v}
   *
   * Merges all own properties of the first object into the second.
   *
   * @since v0.4.0
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

  /**
   * not : Boolean -> Boolean
   *
   * @since v0.6.0
   */
  function not (a) {
    return !a
  }

  /**
   * of : a -> [a]
   *
   * @since v0.7.0
   */
  function of (x) {
    return [x]
  }

  /**
   * prop : String -> {k:v} -> v
   *
   * @since v0.1.0
   */
  var prop = _curry2(function prop (p, x) {
    return x[p]
  })

  /**
   * propEq : String -> * -> {k:v} -> Boolean
   *
   * @since v0.1.0
   */
  var propEq = _curry3(function propEq (p, y, x) {
    return x[p] === y
  })

  /**
   * rangeBy : Number -> Number -> Number -> [Number]
   *
   * @since v0.7.0
   */
  var rangeBy = _curry3(function rangeBy (inc, i, end) {
    var ys = []

    for (; i < end; i += inc) {
      ys.push(i)
    }
    return ys
  })

  /**
   * range : Number -> [Number]
   *
   * @since v0.7.0
   */
  var range = rangeBy(1)

  /**
   * reduce : ((b, a) -> b) -> b -> [a]
   *
   * @since v0.1.0
   */
  var reduce = _curry3(function reduce (fn, y, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      y = fn(y, xs[i])
    }
    return y
  })

  /**
   * reduceRight : ((b, a) -> b) -> b -> [a]
   *
   * @since v0.1.0
   */
  var reduceRight = _curry3(function reduceRight (fn, y, xs) {
    return reduce.call(this, fn, y, _reverse.call(xs))
  })

  /**
   * reject : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var reject = _curry2(function reject (fn, xs) {
    return filter(complement(fn), xs)
  })

  /**
   * reverse : [a] -> [a]
   *
   * @since v0.1.0
   */
  function reverse (xs) {
    return _reverse.call(xs.slice(0))
  }

  /**
   * sum : [Number] -> Number
   *
   * @since v0.10.0
   */
  var sum = reduce(add, 0)

  /**
   * tail : [a] -> [a]
   *
   * @since v0.1.0
   */
  function tail (xs) {
    return _slice.call(xs, 1)
  }

  /**
   * take : Number -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var take = _curry2(function take (n, xs) {
    return _slice.call(xs, 0, n)
  })

  /**
   * takeUntil : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var takeUntil = _curry2(function takeUntil (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (fn(xs[i])) {
        return _slice.call(xs, 0, i)
      }
    }
    return _slice.call(xs)
  })

  /**
   * times : (Number -> a) -> Number -> [a]
   *
   * @since v0.5.0
   */
  var times = _curry2(function times (fn, n) {
    var i  = 0
      , bs = []

    for (; i < n; i++) {
      bs.push(fn(i))
    }
    return bs
  })

  /**
   * toLower : String -> String
   *
   * @since v0.4.0
   */
  function toLower (a) {
    return a.toLowerCase()
  }

  /**
   * toUpper : String -> String
   *
   * @since v0.4.0
   */
  function toUpper (a) {
    return a.toUpperCase()
  }

  /**
   * tap : (a -> b) -> a -> a
   *
   * @since v0.7.0
   */
  function tap (fn) {
    return function (a) {
      fn(a)
      return a
    }
  }

  /**
   * toPairs : {k:v} -> [[k, v]]
   *
   * @since v0.7.0
   */
  function toPairs (obj) {
    var ys = []
      , p

    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        ys.push([p, obj[p]])
      }
    }
    return ys
  }

  /**
   * without : [a] -> [a] -> [a]
   *
   * @since v0.7.0
   */
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

  /**
   * zip : [a] -> [b] -> [[a, b]]
   *
   * @since v0.3.0
   */
  var zip = _curry2(function zip (as, bs) {
    var i   = 0
      , len = Math.min(as.length, bs.length)
      , ys  = new Array(len)

    for (; i < len; i++) {
      ys[i] = [as[i], bs[i]]
    }
    return ys
  })

  /**
   * zipObj : [k] -> [v] -> {k:v}
   *
   * @since v0.3.0
   */
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
  exports.always = always;
  exports.any = any;
  exports.append = append;
  exports.assoc = assoc;
  exports.concat = concat;
  exports.complement = complement;
  exports.compose = compose;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.dec = dec;
  exports.dissoc = dissoc;
  exports.drop = drop;
  exports.equals = equals;
  exports.filter = filter;
  exports.find = find;
  exports.findIndex = findIndex;
  exports.flatMap = flatMap;
  exports.flatten = flatten;
  exports.flattenDeep = flattenDeep;
  exports.flip = flip;
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
  exports.sum = sum;
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