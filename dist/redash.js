(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Redash = {}));
}(this, function (exports) { 'use strict';

  function _curry1 (fn) {
    return function curriedUnaryFunction (a0) {
      return arguments.length ? fn(a0) : curriedUnaryFunction
    }
  }

  function _curry2 (fn) {
    return function curriedBinaryFunction (a0, a1) {
      switch (arguments.length) {
        case 0: return curriedBinaryFunction
        case 1: return _curry1(function curriedUnaryFunction (b0) {
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
   * TODO(zuko): implement as conj?
   * TODO(zuko): how should strings be handled?
   *
   * @since v0.10.0
   */
  var append = _curry2(function append (x, xs) {
    return _concat.call(xs, x)
  })

  function _curry3 (fn) {
    return function curriedTernaryFunction (a0, a1, a2) {
      switch (arguments.length) {
        case 0: return curriedTernaryFunction
        case 1: return _curry2(function curriedBinaryFunction (_a1, _a2) {
          return fn(a0, _a1, _a2)
        })
        case 2: return _curry1(function curriedUnaryFunction (_a2) {
          return fn(a0, a1, _a2)
        })
        default: return fn(a0, a1, a2)
      }
    }
  }

  /**
   * assoc : String k -> v -> {k:v} -> {k:v}
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

  /**
   * cond : [[(a -> Boolean), (a -> *)]] -> a -> *
   */
  var cond = _curry2(function cond (conditions, a) {
    var i   = 0
      , len = conditions.length

    for (; i < len; i++) {
      if (conditions[i][0](a)) {
        return conditions[i][1](a)
      }
    }
  })

  /**
   * compact : [a] -> [a]
   */
  function compact (xs) {
    var i   = 0
      , len = xs.length
      , res = []

    for (; i < len; i++) {
      if (xs[i]) {
        res[res.length] = xs[i]
      }
    }
    return res
  }

  var _reverse = [].reverse

  var _slice = [].slice

  // Credit to Ramda for this idea for creating curried functions that
  // properly report their arity via function.length.
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  function _arity (arity, fn) {
    switch (arity) {
      // Arities 0 -> 3 are automatically handled by curry, _curry1, _curry2, and _curry3
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
      default: return _curryN(arity, [], fn)
    }
  })

  /**
   * pipe : ((a, b, ..., f -> g), (g -> h), ..., (y -> z)) -> ((a, b, ..., f) -> z
   *
   * @since v0.1.0
   */
  function pipe () {
    var fns = arguments

    return curryN(fns[0].length, function () {
      var i   = 0
        , len = fns.length
        , acc = fns[i++].apply(null, arguments)

      for (; i < len; i++) {
        acc = fns[i](acc)
      }
      return acc
    })
  }

  /**
   * compose : ((y -> z), ..., (g -> h), (a, b, ..., f -> g)) -> (a, b, ..., f -> z)
   *
   * @since v0.1.0
   */
  function compose () {
    return pipe.apply(null, _reverse.call(arguments))
  }

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
   * dissoc : String k -> {k:v} -> {k:v}
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
  var equals = _curry2(_equals)

  /**
   * filter : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.1.0
   */
  var filter = _curry2(function filter (pred, as) {
    var i   = 0
      , len = as.length
      , res = []
      , a

    while (i < len) {
      a = as[i++]
      if (pred(a)) {
        res[res.length] = a
      }
    }
    return res
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
   * findLast : (a -> Boolean) -> [a] -> a | undefined
   *
   * @since v0.12.0
   */
  var findLast = _curry2(function findLast (pred, xs) {
    var i = xs.length - 1

    while (i >= 0) {
      if (pred(xs[i])) {
        return xs[i]
      }
      i--
    }
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
    var acc = []
      , i   = 0
      , len = xs.length
      , x
      , xi
      , xlen

    for (; i < len; i++) {
      x = xs[i]
      if (Array.isArray(x)) {
        for (xi = 0, xlen = x.length; xi < xlen; xi++) {
          acc.push(x[xi])
        }
      } else {
        acc.push(x)
      }
    }
    return acc
  }

  /**
   * flattenDeep : [[a]] -> [a]
   *
   * @since v0.5.0
   */
  function flattenDeep (xs) {
    var acc = []
      , i   = 0
      , len = xs.length
      , x
      , xi
      , xlen

    for (; i < len; i++) {
      x = xs[i]
      if (Array.isArray(x)) {
        x = flattenDeep(x)
        for (xi = 0, xlen = x.length; xi < xlen; xi++) {
          acc[acc.length] = x[xi]
        }
      } else {
        acc[acc.length] = x
      }
    }
    return acc
  }

  /**
   * flip : (a -> b -> c -> ... -> z) -> (z -> ... -> c -> b -> a)
   *
   * @since v0.10.0
   */
  function flip (fn) {
    return curryN(fn.length, function () {
      return fn.apply(null, _reverse.call(arguments))
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
  function fromPairs (kvs) {
    var i   = 0
      , len = kvs.length
      , acc = {}

    for (; i < len; i++) {
      acc[kvs[i][0]] = kvs[i][1]
    }

    return acc
  }

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
   * ifElse : (a -> Boolean) -> (a -> *) -> (a -> *) -> (a -> *)
   *
   * TODO: Should this curry the returned function to `cond` arity?
   *
   * @param {Function} cond
   * @param {Function} ifTrue
   * @param {Function} ifElse
   */
  var ifElse = _curry3(function ifElse (cond, whenTrue, whenElse) {
    return function (x) {
      return cond(x) ? whenTrue(x) : whenElse(x)
    }
  })

  /**
   * inc : Number -> Number
   *
   * @since v0.6.0
   */
  function inc (a) {
    return a + 1
  }

  /**
   * insert : Number -> a -> [a] -> [a]
   *
   * @since v0.11.0
   */
  var insert = _curry3(function insert (idx, x, xs) {
    var ys = _slice.call(xs)

    ys[idx] = x
    return ys
  })

  /**
   * isNil : * -> Boolean
   *
   * @param {*} x
   * @returns Boolean
   */
  function isNil (x) {
    return x == null
  }

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
   * lens : ((k -> v), (k, v, {k:v} -> {k:v})) -> Lens k
   *
   * @param {Function} get
   * @param {Function} set
   * @returns {Function}
   */
  var lens = _curry2(function lens (getter, setter) {
    return {
      get: getter
    , set: setter
    }
  })

  /**
   * prop : String k -> {k:v} -> v
   *
   * @since v0.1.0
   */
  var prop = _curry2(function prop (k, o) {
    return o[k]
  })

  /**
   * lensProp : String -> Lens
   *
   * @param {String} key - the key to focus on.
   * @returns {Lens} a lens focused on the provided key.
   */
  function lensProp (key) {
    return lens(prop(key), assoc(key))
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
  var map = _curry2(function map (fn, as) {
    var bs  = new Array(as.length)
      , i   = 0
      , len = as.length

    for (; i < len; i++) {
      bs[i] = fn(as[i])
    }
    return bs
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
   * Merges all own properties of the second object into the first.
   *
   * @since v0.4.0
   */
  var merge = _curry2(function merge (a, b) {
    var y = {}
      , f = function (k, v) {
        y[k] = v
      }

    _eachOwn(f, a)
    _eachOwn(f, b)
    return y
  })

  /**
   * not : Boolean -> Boolean
   * not : (*... -> Boolean) -> (*... -> Boolean)
   *
   * @since v0.6.0
   */
  function not (x) {
    if (typeof x !== 'function') {
      return !x
    }

    return curryN(x.length, function () {
      return !x.apply(null, arguments)
    })
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
   * set : Lens k -> v -> {k:v} -> {k:v}
   *
   * @param {Lens} lens
   * @param {*} value
   * @param {Object} target
   * @returns {Object}
   */
  var set = _curry3(function set (lens, value, target) {
    return lens.set(value, target)
  })

  /**
   * over : Lens k -> (v -> *) -> {k:v} -> {k:v}
   *
   * @param {Lens} lens
   * @param {Function} fn
   * @param {Object|*} target
   * @returns {*}
   */
  var over = _curry3(function over (lens, fn, target) {
    return set(lens, fn(lens.get(target)), target)
  })

  /**
   * propEq : String k -> v -> {k:v} -> Boolean
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
  var rangeBy = _curry3(function rangeBy (inc, start, end) {
    var ys = []
      , times
      , i

    // TODO: should (some of) these throw?
    if (
      inc === 0 ||
      inc > 0 && start > end ||
      inc < 0 && start < end
    ) {
      return []
    }

    times = Math.abs(Math.ceil((end - start) / inc))
    for (i = 0; i < times; i++) {
      ys.push(start + (inc * i))
    }
    return ys
  })

  /**
   * range : Number -> Number -> [Number]
   *
   * @since v0.7.0
   */
  var range = rangeBy(1)

  function _reduce (fn, acc, as) {
    var i   = 0
      , len = as.length

    for (; i < len; i++) {
      acc = fn(acc, as[i])
    }
    return acc
  }

  /**
   * reduce : (b, a -> b) -> b -> [a] -> b
   *
   * @since v0.1.0
   */
  var reduce = _curry3(_reduce)

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
    return filter(not(fn), xs)
  })

  /**
   * reverse : [a] -> [a]
   *
   * @since v0.1.0
   */
  function reverse (xs) {
    return _reverse.call(_slice.call(xs, 0))
  }

  /**
   * scan : (b, a -> b) -> b -> [a] -> [b]
   *
   * @since v0.12.0
   */
  var scan = _curry3(function scan (fn, acc, as) {
    var i   = 0
      , len = as.length
      , bs  = [acc]

    for (; i < len; i++) {
      acc = fn(acc, as[i])
      bs[bs.length] = acc
    }
    return bs
  })

  /**
   * sum : [Number] -> Number
   *
   * @since v0.10.0
   */
  function sum (xs) {
    var i   = 0
      , len = xs.length
      , sum = 0

    for (; i < len; i++) {
      sum += xs[i]
    }
    return sum
  }

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
   * takeWhile : (a -> Boolean) -> [a] -> [a]
   *
   * @since v0.12.0
   */
  var takeWhile = _curry2(function takeWhile (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (!fn(xs[i])) {
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
   * tap : (a -> *) -> a -> a
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
    return kvs
  }

  /**
   * view : Lens k -> {k:v} -> v
   *
   * @param {Lens} lens
   * @param {Object} target
   * @returns {*}
   */
  var view = _curry2(function view (lens, target) {
    return lens.get(target)
  })

  /**
   * without : [a] -> [a] -> [a]
   *
   * TODO(zuko): if lists are hashable, create hash to improve lookup speed
   * TODO(zuko): could we just use a Map?
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
        if (b === as[ai]) {
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
  exports.cond = cond;
  exports.compact = compact;
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
  exports.findLast = findLast;
  exports.flatMap = flatMap;
  exports.flatten = flatten;
  exports.flattenDeep = flattenDeep;
  exports.flip = flip;
  exports.forEach = forEach;
  exports.fromPairs = fromPairs;
  exports.has = has;
  exports.head = head;
  exports.identity = identity;
  exports.ifElse = ifElse;
  exports.inc = inc;
  exports.insert = insert;
  exports.isNil = isNil;
  exports.keys = keys;
  exports.last = last;
  exports.lens = lens;
  exports.lensProp = lensProp;
  exports.map = map;
  exports.merge = merge;
  exports.not = not;
  exports.of = of;
  exports.over = over;
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
  exports.scan = scan;
  exports.set = set;
  exports.sum = sum;
  exports.tail = tail;
  exports.take = take;
  exports.takeWhile = takeWhile;
  exports.times = times;
  exports.toLower = toLower;
  exports.toUpper = toUpper;
  exports.tap = tap;
  exports.toPairs = toPairs;
  exports.view = view;
  exports.without = without;
  exports.zip = zip;
  exports.zipObj = zipObj;

}));