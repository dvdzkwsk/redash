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
