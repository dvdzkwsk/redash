Redash
======
[![Build Status](https://travis-ci.org/davezuko/redash.svg?branch=master)](https://travis-ci.org/davezuko/redash)

Redash is a lightweight, functional-first library meant to fill the gap between Ramda and Lodash. All functions are auto-curried and expect data as the last argument to encourage composition. This library's ultimate goal is to remain as lightweight as possible; that means zero dependencies and an incredibly focused API that will give you the right tools for the job and nothing more.

## Redash vs. Ramda vs. Lodash

Category           | Redash | Ramda | Lodash | Lodash-FP
------------------ | ------ | ----- | ------ | ---------
Minified (kb)      | 3.65   | 39.1  | 60.8   | 66 
Immutable          | Yes    | Yes   | No     | Yes
Functional First   | Yes    | Yes   | No     | No
Reference Equality | Yes    | No    | Yes    | Yes
Value Equality     | No     | Yes   | No     | No
IE 9+              | Yes    | Yes   | Yes    | Yes
