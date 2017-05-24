# Redash
[![Build Status](https://travis-ci.org/davezuko/redash.svg?branch=master)](https://travis-ci.org/davezuko/redash)
[![dependencies Status](https://david-dm.org/davezuko/redash/status.svg)](https://david-dm.org/davezuko/redash)

[Check out the API docs!](https://redash.zuko.me)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. This means that all functions are immutable, auto-curried, and designed for composition.

1. [Why](#why)
1. [Usage](#usage)
1. [Comparisons](#comparisons)

## Why?

### First Class Functional Programming
Redash's primary goal is to support and encourage functional programming styles. Unlike some other libraries that simply offer FP-_ish_ wrappers, functional programming is a first class citizen in Redash. This means that every function is immutable, auto-curried, and written to expect data last to facilitate composition. Redash also compares objects by value, not reference, allowing you to start working with data in a meaningful way without concerning yourself with how it's stored in memory.

### Built for the Next Generation of JavaScript
The Redash codebase is written with ES2015 modules and packaged with rollup so you to take advantage of tree shaking without the need for extra tooling. Redash also offers complete typings for TypeScript users so that you can work with its API with complete confidence.

### Developer Tools
One pain point often arises when working with JavaScript in a more functional style: debugging. Ever encounter stack traces with multiple frames of unintelligible function calls? This problem is exacerbated by composition, something we should be encouraging. Redash attempts to improve this experience by enhancing function names to describe their curried arguments. Let's take a look:

```js
import _ from 'lodash/fp'
import R from 'redash'

const getNames = _.map(_.get('name'))
console.log(getNames.toString()) // => 'function uu(n,t){\n/* [wrapped with…*/\nreturn(af(n)?l:Yt)(n,je(t,3))}'

const getNames_ = R.map(R.get('name'))
console.log(getNames_.toString()) // => 'map(get("name"))'
```

## Usage

```bash
npm i --save redash
```

After that's done, just import it in your code and get on to building awesome stuff. If you haven't already done so, you should check out the [API documentation](https://redash.zuko.me) to see what functions are available and learn how to use them. Here are a few of the most common ways to use Redash:

### ES2015 Module
```js
import { map, get } from 'redash'

map(get('name'), [{ name: 'Dwight' }, { name: 'Jim' }]) // => ['Dwight', 'Jim']
```

### Installer
If you have full control over your codebase and don't want to continually import/prefix all of the functions, you can install the library to a context.

```js
import install from 'redash/installer'

install(global)

// Now all of the functions are available on the scope you installed it to:
get('name', { name: 'Michael' }) // => 'Michael'
```

## Comparisons

Category        | Redash  | Ramda | Lodash    | Lodash-FP
--------------- | ------- | ----- | --------- | ---------
Minified (kb)   | 15.6    | 41.1  | 71.1      | 82.4
100% Immutable  | Yes     | Yes   | No        | Yes
Auto-Curry      | Yes     | Yes   | No        | Yes
Object Equality | Value   | Value | Reference | Reference
IE 9+           | Yes     | Yes   | Yes       | Yes
