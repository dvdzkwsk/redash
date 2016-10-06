# fp-standard
[![Build Status](https://travis-ci.org/davezuko/fp-standard.svg?branch=master)](https://travis-ci.org/davezuko/fp-standard)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. All functions are auto-curried and expect data as the last argument to encourage composition.

## Usage

```bash
npm i --save fp-standard
```

After installing the dependency, there are a few ways to use this library:

### ES6 Module
```js
import * as f from 'fp-standard'

const name = f.prop('name')
name({ name: 'Bob' }) // => Bob
```

Or, if you have full control over your code base and don't want to continually import/prefix all of the functions, you can install the library to a context.

### Installer
```js
import install from 'fp-standard/installer'

// Node/Webpack/etc:
install(global)

// Directly in the browser:
install(window)

// Now all of the functions are available on the scope you installed it to:
prop('name', { name: 'Bob' }) // => Bob
```

## fp-standard vs. Ramda vs. Lodash

Category        | fp-standard | Ramda | Lodash    | Lodash-FP
--------------- | ----------- | ----- | --------- | ---------
Minified (kb)   | 7.9         | 41.1  | 70.1      | 81.2
100% Immutable  | Yes         | Yes   | No        | Yes
Auto-Curry      | Yes         | Yes   | No        | Yes
Object Equality | Value       | Value | Reference | Reference
IE 9+           | Yes         | Yes   | Yes       | Yes

## Benchmarks

Improved formatting to come soon!

```js
[
  // Reduce
  // -------------------------
  [
    "fp-standard | 1,007,237  ops/sec ±1.84%   (82 runs sampled)",
    "ramda       | 16,457     ops/sec ±2.01%   (88 runs sampled)",
    "lodash      | 81,662     ops/sec ±1.56%   (82 runs sampled)",
    "lodash/fp   | 339,761    ops/sec ±1.47%   (79 runs sampled)"
  ],
  // Map
  // -------------------------
  [
    "fp-standard | 586,940    ops/sec ±2.18%   (83 runs sampled)",
    "ramda       | 447,594    ops/sec ±2.03%   (88 runs sampled)",
    "lodash      | 70,825     ops/sec ±2.01%   (81 runs sampled)",
    "lodash/fp   | 380,222    ops/sec ±1.58%   (83 runs sampled)"
  ],
  // Filter
  // -------------------------
  [
    "fp-standard | 317,629    ops/sec ±0.71%   (95 runs sampled)",
    "ramda       | 326,238    ops/sec ±1.12%   (89 runs sampled)",
    "lodash      | 72,329     ops/sec ±0.86%   (93 runs sampled)",
    "lodash/fp   | 266,918    ops/sec ±1.97%   (87 runs sampled)"
  ],
  // Reject
  // -------------------------
  [
    "fp-standard | 324,369    ops/sec ±1.35%   (78 runs sampled)",
    "ramda       | 45,971     ops/sec ±1.49%   (80 runs sampled)",
    "lodash      | 38,072     ops/sec ±2.10%   (84 runs sampled)",
    "lodash/fp   | 34,872     ops/sec ±1.49%   (81 runs sampled)"
  ]
]
```