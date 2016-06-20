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

  function _arrayEach (f, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (f(xs[i], i)) {
        return
      }
    }
  }

  /**
   * all : (a -> Boolean) -> [a] -> Boolean
   *
   * @since v0.7.0
   */
  var all = _curry2(function all (fn, xs) {
    var all = true

    _arrayEach(function (x) {
      if (fn(x)) {
        all = false
        return true
      }
    }, xs)
    return all
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
    var found = false

    _arrayEach(function (x) {
      if (fn(x)) {
        return found = true
      }
    }, xs)
    return found
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
  var assoc = _curry3(function assoc (k, v, o) {
    var y = {}
      , p

    for (p in o) {
      y[p] = o[p]
    }
    y[k] = v
    return y
  })

  /**
   * concat : [a] -> [a] -> [a]
   *
   * @since v0.7.0
   */
  var concat = _curry2(function concat (as, bs) {
    return _concat.call(as, bs)
  })

  var _arraySlice = [].slice

  // Credit to Ramda for this idea for creating curried functions that
  // properly report their arity via function.length.
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  function _arity (arity, fn) {
    switch (arity) {
      case 0: return function () { return fn.apply(this, arguments) }
      case 1: return function (a0) { return fn.apply(this, arguments) }
      case 2: return function (a0, a1) { return fn.apply(this, arguments) }
      case 3: return function (a0, a1, a2) { return fn.apply(this, arguments) }
      case 4: return function (a0, a1, a2, a3) { return fn.apply(this, arguments) }
      case 5: return function (a0, a1, a2, a3, a4) { return fn.apply(this, arguments) }
      case 6: return function (a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments) }
      default: throw new Error('Arity must be less than or equal to 6.')
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
        newApplied = _arraySlice.call(applied)
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
   * complement : (*... -> Boolean) -> (*... -> Boolean)
   *
   * @since v0.9.0
   */
  function complement (fn) {
    return _curryN(fn.length, [], function () {
      return !fn.apply(this, arguments)
    })
  }

  var _reverse = [].reverse

  /**
   * pipe : ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z
   *
   * @since v0.1.0
   */
  function pipe () {
    var fns = arguments

    return _curryN(fns[0].length, [], function () {
      var i   = 0
        , len = fns.length
        , y   = fns[i++].apply(null, arguments)

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
      default:
        return _curryN(arity, [], fn)
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
  var dissoc = _curry2(function dissoc (k, kv) {
    var y = {}
      , p

    for (p in kv) {
      if (p !== k) {
        y[p] = kv[p]
      }
    }
    return y
  })

  function _slice (xs, from, to) {
    return _arraySlice.call(xs, from, to)
  }

  /**
   * drop : Number -> Array -> Array
   *
   * @since v0.10.0
   */
  var drop = _curry2(function drop (n, xs) {
    return _slice(xs, n)
  })

  function _equals (a, b) {
    return a === b
  }

  /**
   * equals : a -> a -> Boolean
   *
   * @since v0.7.0
   */
  var equals = _curry2(_equals)

  /**
   * filter : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var filter = _curry2(function filter (fn, xs) {
    var ys = []

    _arrayEach(function (x) {
      if (fn(x)) {
        ys.push(x)
      }
    }, xs)
    return ys
  })

  /**
   * find : (a -> Boolean) -> [a] -> a | undefined
   *
   * @since v0.6.0
   */
  var find = _curry2(function find (pred, xs) {
    var y

    _arrayEach(function (x) {
      if (pred(x)) {
        y = x
        return true
      }
    }, xs)
    return y
  })

  /**
   * findIndex : (a -> Boolean) -> [a] -> Number
   *
   * @since v0.1.0
   */
  var findIndex = _curry2(function findIndex (pred, xs) {
    var _i = -1

    _arrayEach(function (x, i) {
      if (pred(x)) {
        _i = i
        return true
      }
    }, xs)
    return _i
  })

  /**
   * flatMap : (a -> b | [b]) -> [a] -> [b]
   *
   * @since v0.1.0
   */
  var flatMap = _curry2(function flatMap (fn, as) {
    var bs = []

    _arrayEach(function (a) {
      var x = fn(a)
      if (Array.isArray(x)) {
        _arrayEach(function (x_) {
          bs.push(x_)
        }, x)
      } else {
        bs.push(x)
      }
    }, as)

    return bs
  })

  function _reduce (fn, b, as) {
    _arrayEach(function (a) {
      b = fn(b, a)
    }, as)
    return b
  }

  /**
   * reduce : ((b, a) -> b) -> b -> [a]
   *
   * @since v0.1.0
   */
  var reduce = _curry3(_reduce)

  /**
   * flatten : [[a]] -> [a]
   *
   * @since v0.1.0
   */
  var flatten = reduce(function flatten (acc, x) {
    if (Array.isArray(x)) {
      _arrayEach(function (x_) {
        acc.push(x_)
      }, x)
    } else {
      acc.push(x)
    }
    return acc
  }, [])

  /**
   * flattenDeep : [[a]] -> [a]
   *
   * @since v0.5.0
   */
  var _flattenDeep = reduce(function flattenDeep (acc, x) {
    return _concat.call(
      acc,
      Array.isArray(x) ? _flattenDeep(x) : x
    )
  }, [])

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
    _arrayEach(function (x) {
      fn(x)
    }, xs)
  })

  /**
   * fromPairs : [[k, v]] -> {k:v}
   *
   * @since v0.7.0
   */
  var fromPairs = reduce(function fromPairs (acc, x) {
    acc[x[0]] = x[1]
    return acc
  }, {})

  var _hasOwn = Object.prototype.hasOwnProperty

  /**
   * has : String -> {k:v} -> Boolean
   *
   * @since v0.11.0
   */
  var has = _curry2(function as (k, o) {
    return _hasOwn.call(o, k)
  })

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
    var _i = -1

    _arrayEach(function (x, i) {
      if (x === y) {
        _i = i
        return true
      }
    }, xs)
    return _i
  })

  /**
   * insert : Number -> a -> [a] -> [a]
   *
   * @since v0.11.0
   */
  var insert = _curry3(function insert (idx, x, xs) {
    var ys = _slice(xs)

    ys[idx] = x
    return ys
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
    var ys = new Array(xs.length)

    _arrayEach(function (x, i) {
      ys[i] = fn(x)
    }, xs)
    return ys
  })

  function _eachOwn (f, o) {
    for (var k in o) {
      if (_hasOwn.call(o, k)) {
        f(k, o[k])
      }
    }
  }

  /**
   * merge : {k:v} -> {k:v} -> {k:v}
   *
   * Merges all own properties of the first object into the second.
   *
   * @since v0.4.0
   */
  var merge = _curry2(function merge (a, b) {
    var y = {}
      , f = function (k, v) {
        y[k] = v
      }

    _eachOwn(f, b)
    _eachOwn(f, a)
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
  var prop = _curry2(function prop (k, o) {
    return o[k]
  })

  /**
   * propEq : String -> * -> {k:v} -> Boolean
   *
   * @since v0.1.0
   */
  var propEq = _curry3(function propEq (k, v, o) {
    return o[k] === v
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
   * reduceRight : ((b, a) -> b) -> b -> [a]
   *
   * @since v0.1.0
   */
  var reduceRight = _curry3(function reduceRight (fn, y, xs) {
    return _reduce(fn, y, _reverse.call(xs))
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
    return _reverse.call(_slice(xs, 0))
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
    return _slice(xs, 1)
  }

  /**
   * take : Number -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var take = _curry2(function take (n, xs) {
    return _slice(xs, 0, n)
  })

  /**
   * takeUntil : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var takeUntil = _curry2(function takeUntil (fn, xs) {
    var ys

    _arrayEach(function (x, i) {
      if (fn(x)) {
        ys = _slice(xs, 0, i)
        return true
      }
    }, xs)
    return ys || _slice(xs)
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
  function toPairs (o) {
    var kvs = []

    _eachOwn(function (k, v) {
      kvs.push([k, v])
    }, o)
    return ys
  }

  /**
   * without : [a] -> [a] -> [a]
   *
   * @since v0.7.0
   */
  var without = _curry2(function without (as, bs) {
    var ys = []

    _arrayEach(function (b) {
      var discard = false
      _arrayEach(function (a) {
        if (b === a) {
          return discard = true
        }
      }, as)
      if (!discard) {
        ys.push(b)
      }
    }, bs)

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
      , abs = new Array(len)

    for (; i < len; i++) {
      abs[i] = [as[i], bs[i]]
    }
    return abs
  })

  /**
   * zipObj : [k] -> [v] -> {k:v}
   *
   * @since v0.3.0
   */
  var zipObj = _curry2(function zipObj (ks, vs) {
    var i   = 0
      , len = Math.min(ks.length, vs.length)
      , kv  = {}

    for (; i < len; i++) {
      kv[ks[i]] = vs[i]
    }
    return kv
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
  exports.flattenDeep = _flattenDeep;
  exports.flip = flip;
  exports.forEach = forEach;
  exports.fromPairs = fromPairs;
  exports.has = has;
  exports.head = head;
  exports.identity = identity;
  exports.inc = inc;
  exports.indexOf = indexOf;
  exports.insert = insert;
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