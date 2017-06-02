## v0.21.0

### Deprecations
* Removed `gt`, use `>` inline instead.
* Removed `gte`, use `>=` inline instead.
* Removed `lt`, use `<` inline instead.
* Removed `lte`, use `<=` inline instead.
* Removed `flip`, use arrow functions instead.
* Removed `fmap`.
* Removed `of`.

### Features
* Added `difference`.
* Added `interpose`.
* Added `invert`.

### Fixes
* `compose` now has a correct `toString` representation.
* `pipe` now has a correct `toString` representation.

### Improvements
* Miscellaneous TypesScript definition improvements.
* `get` no longer throws when the target is nil, now returns undefined.
* `getIn` no longer throws when the target is nil, now returns undefined.
* `rangeBy` now returns an empty array when start === end.
* `compose` no longer performs runtime type checking.
* `pipe` no longer performs runtime type checking.
* Eliminated extra toString calls in `equals`.

## v0.20.1

### Improvements
* Improved TypeScript definitions.

## v0.20.0

### Deprecation Warnings
* `path` will be deprecated in future releases.
* `prop` will be deprecated in future releases.
* `propEq` will be deprecated in future releases.

### Migration Path
* `isEmpty` now returns true for falsy values.

### Features
* Added rudimentary TypeScript definitions.
* Added `update`.
* Added `updateIn`.

### Improvements
* Renamed `path` to `getIn`.
* Renamed `prop` to `get`.
* Renamed `propEq` to `getEq`.

## v0.19.1

### Fixes
* `trace` now correctly returns a tapped function. This was broken after function naming was implemented.

## v0.19.0

### Migration path
* `mapValues` has been deprecated because `map` now supports objects. Replace
  usage of `mapValues` with `map`.
* `identical` now implements [SameValueZero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) semantics. The only breaking change here is that `NaN` is now treated as identical to `NaN`.

### Features
* Added `intersection`.
* Added `match`.
* Added `pad`.
* Added `padLeft`.
* Added `padRight`.
* Added `unique`.

### Fixes
* Functions with an arity > 3 now properly report their arity when partially applied.

### Improvements
* `map` now supports plain objects.
* Curried functions now provide better stringified representations for a better debugging experience.
* `identical` now implements [SameValueZero](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) semantics. This affects any function, such as `equals`, that performs identity checks.

## v0.18.0

### Migration path
* Internal `arity` function no longer preserves `this` context. This should not affect the public API, but always be sure that you are not implicitly relying on `this` when working with redash.

### Features
* Added `clamp`.
* Added `groupBy`.
* Added `takeUntil`.
* Added `trace`.
* Added `transform`.
* Added `flatMap` alias for `chain`.

### Improvements
* `concat` now dispatches to the first argument's `concat` method.
* `concat` now supports strings.
* `curry` now supplies _all_ arguments to the wrapped function. This improves support for functions that do not properly report their arities.
* `filter` now works for objects.
* `reject` now works for objects.

## v0.17.0

### Migration path
* `pipe` and `compose` are now unary and require the functions to be wrapped in an array.

```js
pipe(fn1, fn2, fn3)   // old
pipe([fn1, fn2, fn3]) // new

compose(fn3, fn2, fn1)   // old
compose([fn3, fn2, fn1]) // new
```

Beside making the signature for these functions more sane and in line with the rest of the redash API, this change has an added benefit for fans of the trailing comma:

```js
// Error!
pipe(
  fn1,
  fn2,
  fn3,
)

// OK!
pipe([
  fn1,
  fn2,
  fn3,
])
```

### Features
* Added `init`.
* Added `path`.
* Added `replace`.

### Improvements
* `contains` now supports strings.
* `pipe` and `compose` are now both unary.

## v0.16.0

### Features
* Added `F`.
* Added `T`.
* Added `partition`.

### Deprecations
* `mapIndexed` is now `mapi`.

## v0.15.1

### Features
* `pipe` and `compose` now throw early if they receive arguments that are not functions.

## v0.15.0

### Features
* Added `pick`.
* Added `omit`.

## v0.14.2

### Features
* Added `mapKeys`.
* Added `mapValues`.
* Added `where`.

### Fixes
* `append` now appends a list correctly rather than concatenating.
* `isOdd` now correctly returns false for all non-integers.

### Improvements
* `append` can now handle strings, making it a correct mirror of `prepend`.

## v0.14.1

### Fixes
* Removes usage of `const` in `juxt`.
* Removes usage of `const` in `lensProp`.

## v0.14.0

### Features
* Created online [API documentation](https://davezuko.gitbooks.io/redash/content/api_docs.html).
* Added `contains`.
* Added `divide`.
* Added `dropWhile`.
* Added `dropUntil`.
* Added `empty`.
* Added `isEmpty`.
* Added `isEven`.
* Added `isOdd`.
* Added `isType` (formerly `is`).
* Added `juxt`.
* Added `max`.
* Added `mean`.
* Added `min`.
* Added `multiply`.
* Added `prepend`.
* Added `test`.
* Added `unless`.
* Added `values`.
* Added `when`.

### Improvements
* `rangeBy` now throws for invalid ranges.

### Fixes
* `range` now supports negative ranges.

### Deprecations
* Removed `is`, it is now `isType`.

### Features
* All objects are now compared deeply by value rather than by reference.
* Added `complement`.
* Added `fmap`.
* Added `gt`.
* Added `gte`.
* Added `identical`.
* Added `is`.
* Added `join`.
* Added `length`.
* Added `lt`.
* Added `lte`.
* Added `pair`.
* Added `trim`.
* Added `type`.

### Improvements
* `reject` received a performance boost.
* Rewrote test suite with AVA.

### Fixes
* Fixed `insert` to no longer (incorrectly) replace the existing element at the target index.

### Warnings
* Renamed `flatMap` to `chain`.

### Deprecations
* Removed `not`.

## v0.12.0

### Features
* Added `takeWhile`.
* Added `compact`.

### Improvements
* `findLast` performance boost, now iterates from the end of the list.
* `flattenDeep` received a huge performance boost by eliminating slow `concat` calls.

### Fixes
* Fixed `fromPairs` reduce implementation where the accumulator was mutated, affecting subsequent invocations.

### Deprecations
* Removed `takeUntil`.
