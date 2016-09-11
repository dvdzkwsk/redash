# fp-standard
[![Build Status](https://travis-ci.org/davezuko/fp-standard.svg?branch=master)](https://travis-ci.org/davezuko/fp-standard)

The missing standard library for JavaScript. This lightweight library is meant to fill the gap between Ramda (functional) and Lodash (performance) while providing you with the tools you need to write sane JavaScript. All functions are auto-curried and expect data as the last argument to encourage composition.

## Stdlib vs. Ramda vs. Lodash

Category        | Stdlib    | Ramda | Lodash    | Lodash-FP
--------------- | --------- | ----- | --------- | ---------
Minified (kb)   | 7.5       | 41.1  | 66.8      | 76.6
100% Immutable  | Yes       | Yes   | No        | Yes
Auto-Curry      | Yes       | Yes   | No        | Yes
Object Equality | Value     | Value | Reference | Reference
IE 9+           | Yes       | Yes   | Yes       | Yes

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

## Comparisons

### fp-standard vs. ramda

...

### fp-standard vs. lodash
Lodash is extremely popular for good reason; it is renowned for its incredibly performance and exceptionally ergonomic API. We'll touch on both of these separately as we work through the comparisons.

#### Graceful Null Checking
Graceful null checking is the concept that you can provide a `null`, `undefined`, or otherwise bad value to a function and not cause it throw at runtime. This feature eliminates one of the biggest sources of pain caused by the language's dynamic nature. Its ommission from this library is not accidental; Lodash's null checking solution is, in my opinion, the wrong solution to the problem.

The prevention of runtime errors is done **silently**. This means that lodash allows you to silently feed errors and bad data through your program, which substantially increases a bug's surface area.

This library encourages users to be explicit about edge cases and handle them opaquely (this is also where [Functors](http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html) start to shine since they essentially encapsulate this logic inside of a type).

#### Function Shorthands
Concerning shorthand syntax, in my experience I've found it to be more sane to keep API surface area as small as possible, and this means avoiding polymorphic and overloaded functions. By limiting the number of different ways a function can be applied, we implicitly standardize code styles and limit the amount of "magic" in the codebase.

#### Design Philosophy
Lodash's functional build, coined `lodash-fp`, does a great job at trying to pull Lodash back into the functional world. However, there are a few areas where it is lacking. First, it is simply a transformed version of lodash core. This makes sense, since it wouldn't be wise to rewrite Lodash in its entirity and maintain the two separately; however, what this means is that it is a second class citizen. It lacks sufficient [documentation](https://github.com/lodash/lodash/wiki/FP-Guide), instead opting to describe how lodash core is transformed to lodash-fp, which is lacking as a reference resource.

#### Recommendations
Lodash will always be a more comprehensive library than Stdlib. If you are looking for a full functional replacement, or a functional library that offers similar shorthand methods, Stdlib is not it.

To be continued...



