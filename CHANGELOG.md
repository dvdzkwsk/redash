## v0.17.0

### Migration path
* `pipe` and `compose` are now unary and require the functions to be wrapped in an array.

```js
pipe(fn1, fn2, fn3)   // old
pipe([fn1, fn2, fn3]) // new

compose(fn3, fn2, fn1)    // old
compose([fn3, fn2, fnd1]) // new
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

### Improvements
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
