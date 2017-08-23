# Redash
[![Build Status](https://travis-ci.org/davezuko/redash.svg?branch=master)](https://travis-ci.org/davezuko/redash)
[![dependencies Status](https://david-dm.org/davezuko/redash/status.svg)](https://david-dm.org/davezuko/redash)

[Check out the API docs!](https://redash.zuko.me)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. This means that all functions are immutable, auto-curried, and easily composable.

1. [Why](#why)
1. [Usage](#usage)
1. [Comparisons](#comparisons)

## Why?

### First Class Functional Programming
Redash is designed to encourage functional programming styles without sacrificing the utility you're used to. What sets it apart is that, unlike some other libraries that simply offer FP-_ish_ wrappers, functional programming is a first class citizen in Redash. Here's what that means for you:

* **Immutability** - Redash will never mutate your data; objects are always shallowly copied.
* **Auto-Curry** - Every function in the redash API is [curried](https://hughfdjackson.com/javascript/why-curry-helps/). Use them as building blocks to create more complex functionality.
* **Equality** - Objects are compared by value, not reference. Work with data in a meaningful way without concerning yourself with how it's stored in memory.

### Built for the Next Generation of JavaScript
The Redash codebase is written with ES2015 modules and packaged with rollup so you to take advantage of tree shaking without the need for extra tooling. Redash also offers complete typings for TypeScript users so that you can work with its API with complete confidence.

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

Category        | Redash  | Ramda | Lodash    | Lodash/FP
--------------- | ------- | ----- | --------- | ---------
Minified (kb)   | 14.8    | 44.7  | 71.1      | 82.4
100% Immutable  | Yes     | Yes   | No        | Yes
Auto-Curry      | Yes     | Yes   | No        | Yes
Object Equality | Value   | Value | Reference | Reference
IE 9+           | Yes     | Yes   | Yes       | Yes
