# Redash
[![Build Status](https://travis-ci.org/davezuko/redash.svg?branch=master)](https://travis-ci.org/davezuko/redash)
[![dependencies Status](https://david-dm.org/davezuko/redash/status.svg)](https://david-dm.org/davezuko/redash)

[Check out the API docs!](https://redash.zuko.me)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. This means that all functions are immutable, auto-curried, and designed to encourage composition by expecting data last.

1. [Why](#Why?)
1. [Usage](#Usage)
1. [Comparisons](#Comparisons)

## Why?

### Built for the Next Generation of JavaScript
The redash codebase is written with ES2015 modules and packaged with rollup, allowing you to take advantage of tree shaking to produce slimmer bundles without the need for extra tooling.

### First Class Functional Programming
Redash's guiding principle is to support and encourage functional programming styles. Unlike some other libraries that simply offer FP-_ish_ wrappers, functional programming is a first class citizen in redash. This means that every function is immutable, auto-curried, and written to expect data last to facilitate composition. Redash also compares objects by value, not reference, which allows you to start working with data in a meaningful way without concerning yourself with how it's stored in memory.

## Usage

```bash
npm i --save redash
```

After that's done, just import it in your code and get on to building awesome stuff. If you haven't already done so, you should check out the [API documentation](https://redash.zuko.me) to see what functions are available and learn how to use them. With that out of the way, here are two of the most common ways to use redash:

### ES6 Module
```js
import * as _ from 'redash'   // import everything
import { prop } from 'redash' // or just what you need

const getName = _.prop('name')
_.map(getName, [{ name: 'Dwight' }, { name: 'Jim' }] // => ['Dwight', 'Jim']
```

### Installer
If you have full control over your codebase and don't want to continually import/prefix all of the functions, you can install the library to a context.

```js
import install from 'redash/installer'

// Node/Webpack/etc:
install(global)

// Directly in the browser:
install(window)

// Now all of the functions are available on the scope you installed it to:
prop('name', { name: 'Michael' }) // => 'Michael'
```

## Comparisons

Category        | Redash  | Ramda | Lodash    | Lodash-FP
--------------- | ------- | ----- | --------- | ---------
Minified (kb)   | 10.1    | 41.1  | 70.1      | 81.2
100% Immutable  | Yes     | Yes   | No        | Yes
Auto-Curry      | Yes     | Yes   | No        | Yes
Object Equality | Value   | Value | Reference | Reference
IE 9+           | Yes     | Yes   | Yes       | Yes
