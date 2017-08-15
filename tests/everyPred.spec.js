const test        = require('ava')
  , { everyPred } = require('../dist/redash')

test('properly report its arity (is binary)', (t) => {
  t.is(everyPred.length, 2)
})

test('is curried', (t) => {
  t.is(typeof everyPred([() => true]), 'function')
})

test('returns true if all predicates pass', (t) => {
  t.true(everyPred([
    () => true
  , () => true
  ], 8))
})

test('returns false if any predicate fails', (t) => {
  t.false(everyPred([
    () => true
  , () => false
  ], 7))
})

test('returns true if there the predicates list is empty', (t) => {
  t.true(everyPred([], 7))
})

