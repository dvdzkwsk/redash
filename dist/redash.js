(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory((global.Redash = {}));
}(this, function (exports) { 'use strict';

  // Credit to Ramda for this idea for creating curried functions that
  // properly re
  // https://github.com/ramda/ramda/blob/master/src/internal/_arity.js
  /* eslint max-len:0 */
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

  var _slice = [].slice

  function _curryN (arity, applied, fn) {
    return _arity(arity, function () {
      var newApplied = applied.concat(_slice.call(arguments))

      return newApplied.length >= arity
        ? fn.apply(null, newApplied)
        : _curryN(arity, newApplied, fn)
    })
  }

  var add = _curryN(2, [], function add (a, b) {
    return a + b
  })

  var compose = function compose () {
    var fns   = arguments
      , maxIdx = fns.length - 1

    return _curryN(fns[maxIdx].length, [], function __composition__ () {
      var i = maxIdx
        , y = fns[i--].apply(null, arguments)

      for (; i >= 0; i--) {
        y = fns[i](y)
      }
      return y
    })
  }

  var curry = function curry (fn) {
    return _curryN(fn.length, [], fn)
  }

  var curryN = _curryN(2, [], function curryN (arity, fn) {
    return _curryN(arity, [], fn)
  })

  var filter = _curryN(2, [], function filter (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x

    for (; i < len; i++) {
      x = xs[i]
      if (fn(x, i)) {
        ys.push(x)
      }
    }
    return ys
  })

  var findIndex = _curryN(2, [], function findIndex (pred, xs) {
    var i   = 0
      , len = xs.length
        
    for (; i < len; i++) {
      if (pred(xs[i])) {
        return i
      }
    }
    return -1
  })

  var flatMap = _curryN(2, [], function flatMap (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
    
    for (; i < len; i++) { 
      ys = ys.concat(fn(xs[i], i))
    }
    
    return ys
  })

  var flatten = function flatten (xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x
    
    for (; i < len; i++) {
      x  = Array.isArray(xs[i]) ? flatten(xs[i]) : xs[i] 
      ys = ys.concat(x)
    }
    
    return ys
  }

  var forEach = _curryN(2, [], function forEach (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      fn(xs[i], i);
    }
  })

  var head = function head (xs) {
    return xs[0]
  }

  var indexOf = _curryN(2, [], function indexOf (y, xs) {
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

  var map = _curryN(2, [], function map (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = new Array(len)

    for (; i < len; i++) {
      ys[i] = fn(xs[i], i)
    }
    return ys
  })

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

  var prop = _curryN(2, [], function prop (p, x) {
    return x[p]
  })

  var propEq =  _curryN(3, [], function propEq (p, y, x) {
    return x[p] === y
  })

  var reduce = _curryN(3, [], function reduce (fn, y, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      y = fn(y, xs[i], i)
    }
    return y
  })

  var reduceRight = _curryN(3, [], function reduceRight (fn, y, xs) {
    var i = xs.length - 1

    for (; i >= 0; i--) {
      y = fn(y, xs[i], i)
    }
    return y
  })

  var reject = _curryN(2, [], function reject (fn, xs) {
    var i   = 0
      , len = xs.length
      , ys  = []
      , x

    for (; i < len; i++) {
      x = xs[i]
      if (!fn(x, i)) {
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

  var take = _curryN(2, [], function take (n, xs) {
    return xs.slice(0, n)
  })

  var takeUntil = _curryN(2, [], function takeUntil (fn, xs) {
    var i   = 0
      , len = xs.length

    for (; i < len; i++) {
      if (fn(xs[i], i)) {
        return xs.slice(0, i)
      }
    }
    return xs.slice(0)
  })

  var trace = function trace (m) {
    return function __trace__ (x) {
      console.log(m, x)
      return x
    }
  }

  exports.add = add;
  exports.compose = compose;
  exports.curry = curry;
  exports.curryN = curryN;
  exports.filter = filter;
  exports.findIndex = findIndex;
  exports.flatMap = flatMap;
  exports.flatten = flatten;
  exports.forEach = forEach;
  exports.head = head;
  exports.indexOf = indexOf;
  exports.keys = keys;
  exports.last = last;
  exports.map = map;
  exports.pipe = pipe;
  exports.prop = prop;
  exports.propEq = propEq;
  exports.reduce = reduce;
  exports.foldl = reduce;
  exports.reduceRight = reduceRight;
  exports.foldr = reduceRight;
  exports.reject = reject;
  exports.reverse = reverse;
  exports.tail = tail;
  exports.take = take;
  exports.takeUntil = takeUntil;
  exports.trace = trace;

}));