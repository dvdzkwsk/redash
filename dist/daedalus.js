/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var DAEDALUS = Object.assign(
	  {
	    VERSION : '0.0.0'
	  },
	  __webpack_require__(2),
	  __webpack_require__(7)
	);

	module.exports = exports = DAEDALUS;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	if (!Object.assign) {
	  Object.defineProperty(Object, 'assign', {
	    enumerable: false,
	    configurable: true,
	    writable: true,
	    value: function(target, firstSource) {
	      'use strict';
	      if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert first argument to object');
	      }

	      var to = Object(target);
	      for (var i = 1; i < arguments.length; i++) {
	        var nextSource = arguments[i];
	        if (nextSource === undefined || nextSource === null) {
	          continue;
	        }
	        nextSource = Object(nextSource);

	        var keysArray = Object.keys(Object(nextSource));
	        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	          var nextKey = keysArray[nextIndex];
	          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	          if (desc !== undefined && desc.enumerable) {
	            to[nextKey] = nextSource[nextKey];
	          }
	        }
	      }
	      return to;
	    }
	  });
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = {
	  curry : __webpack_require__(3),
	  curryN : __webpack_require__(6)
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var _slice  = __webpack_require__(4),
	    _curryN = __webpack_require__(5);

	module.exports = function (fn) {
	  var applied = arguments.length > 1 ?
	    _slice.apply(arguments).slice(1) : [];

	  return _curryN.apply(undefined, [fn.length, fn, applied]);
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var _slice = [].slice;

	module.exports = _slice;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var _slice = __webpack_require__(4);

	function curryN (arity, fn, applied) {
	  if (applied.length >= arity) {
	    return fn.apply(undefined, applied);
	  } else {
	    return function () {
	      var args = _slice.apply(arguments);

	      return curryN(arity, fn, applied.concat(args));
	    };
	  }
	};

	module.exports = curryN;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var _slice  = __webpack_require__(4),
	    _curryN = __webpack_require__(5);

	module.exports = function (arity, fn) {
	  var applied = arguments.length > 2 ?
	    _slice.apply(arguments).slice(2) : [];

	  return _curryN(arity, fn, applied);
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = {
	  forEach : __webpack_require__(8),
	  map     : __webpack_require__(9),
	  reduce  : __webpack_require__(10)
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (fn, xs) {
	  var i = 0, len = xs.length;

	  for (; i < len; i++) {
	    fn(xs[i], i);
	  }
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (fn, xs) {
	  var i  = 0, len = xs.length,
	      ys = new Array(len);

	  for (; i < len; i++) {
	    ys[i] = fn(xs[i], i);
	  }
	  return ys;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	function _reduce (fn, accum, xs, i) {
	  var len = xs.length;

	  for (; i < len; i++) {
	    accum = fn(accum, xs[i], i);
	  }
	  return accum;
	}

	module.exports = function (fn, accum, xs) {
	  return typeof accum === 'undefined' ?
	    reduce(fn, xs[0], xs, 1) : reduce(fn, accum, xs, 0);
	};


/***/ }
/******/ ]);