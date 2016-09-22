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
Minified (kb)   | 7.5         | 41.1  | 66.8      | 76.6
100% Immutable  | Yes         | Yes   | No        | Yes
Auto-Curry      | Yes         | Yes   | No        | Yes
Object Equality | Value       | Value | Reference | Reference
IE 9+           | Yes         | Yes   | Yes       | Yes

## Benchmarks

Each benchmark is measured by the tested operation being performed 10,000 times. The results are in `ms`. Take these with a grain of salt, they are currently just based off of results from a local Node v6 environment.

Function       | Parameters   | fp-standard | ramda | lodash    | lodash-fp
-------------- | ------------ | ----------- | ----- | --------- | ---------
filter         | 10,000 items | 295         | 279   | 1369      | 1365
find           | 10,000 items | 70          | 63    | 1333      | 4480
findLast       | 10,000 items | 62          | 62    | 1213      | 4155
map            | 10,000 items | 160         | 843   | 180       | 183
reduce         | 10,000 items | 108         | 6357  | 135       | 150
scan           | 10,000 items | 524         | 577   | --        | --
sum            | 10,000 items | 77          | 8524  | 882       | 884
takeWhile      | 10,000 items | 138         | 743   | 407       | 392

