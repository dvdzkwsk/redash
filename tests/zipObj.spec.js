const test       = require('ava')
    , { zipObj } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(zipObj.length, 2)
})

test('is curried', (t) => {
  t.is(typeof zipObj([1, 2, 3]), 'function')
})

test('creates an object out of an array of key/value pairs', (t) => {
  t.deepEqual(
    zipObj([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c', 'd', 'e', 'f', 'g']),
    { 1: 'a'
    , 2: 'b'
    , 3: 'c'
    , 4: 'd'
    , 5: 'e'
    , 6: 'f'
    , 7: 'g' })
})

test('truncates to the shorter of the two lists', (t) => {
  t.deepEqual(
    zipObj([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g']),
    { 1: 'a'
    , 2: 'b'
    , 3: 'c' })

  t.deepEqual(
    zipObj([1, 2, 3, 4, 5, 6], ['a', 'b', 'c']),
    { 1: 'a'
    , 2: 'b'
    , 3: 'c' })
})

test('returns an empty object if either list is empty', (t) => {
  t.deepEqual(zipObj([], [1, 2, 3]), {})
  t.deepEqual(zipObj([1, 2, 3], []), {})
})
