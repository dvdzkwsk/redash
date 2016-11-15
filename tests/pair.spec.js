const test     = require('ava')
    , { pair } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(pair.length, 2)
})

test('is curried', (t) => {
  t.is(typeof pair(5), 'function')
})

test('returns an array with the first two arguments as its two elements', (t) => {
  t.deepEqual(pair(1, 2), [1, 2])
})

test('ignores additional arguments', (t) => {
  t.deepEqual(pair(1, 2, 3, 4), [1, 2])
})
