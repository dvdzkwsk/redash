## v0.13.0

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
