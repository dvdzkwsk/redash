Redash
======
[![Build Status](https://travis-ci.org/davezuko/redash.svg?branch=master)](https://travis-ci.org/davezuko/redash)

Redash is a lightweight library meant to fill the gap between Ramda (functional) and Lodash (performance). All functions are auto-curried and expect data as the last argument to encourage composition. Redash's ultimate goal is to remain as lightweight as possible; that means zero dependencies and an incredibly focused API that will give you the right tools for the job and nothing more.

## Redash vs. Ramda vs. Lodash

Category       | Redash    | Ramda | Lodash    | Lodash-FP
-------------- | --------- | ----- | --------- | ---------
Minified (kb)  | 5.67      | 41.1  | 66.8      | 76.6
100% Immutable | Yes       | Yes   | No        | Yes
Auto-Curry     | Yes       | Yes   | No        | Yes
Equality       | Reference | Value | Reference | Reference
IE 9+          | Yes       | Yes   | Yes       | Yes

## Benchmarks

Each benchmark is measured by the tested operation being performed 10,000 times. The results are in `ms`. Take these with a grain of salt, they are currently just based off of results from a local Node v6 environment.

Function       | Parameters   | Redash | Ramda | Lodash    | Lodash-FP
-------------- | ------------ | ------ | ----- | --------- | ---------
filter         | 10,000 items | 295    | 279   | 1369      | 1365
find           | 10,000 items | 70     | 63    | 1333      | 4480
map            | 10,000 items | 160    | 843   | 180       | 183
reduce         | 10,000 items | 108    | 6357  | 135       | 150
scan           | 10,000 items | 524    | 577   | --        | --
sum            | 10,000 items | 77     | 8524  | 882       | 884

## Comparisons

### Redash vs. Ramda

TBD

### Redash vs. Lodash

TBD