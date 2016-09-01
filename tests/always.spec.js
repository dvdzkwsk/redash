const test       = require('ava')
    , { always } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(1, always.length)
})

test('return a function', (t) => {
  t.is('function', typeof always(5))
})

test('returns the provided value from the produced function', (t) => {
  t.is(5, always(5)())
})

test('work for multiple invocations', (t) => {
  const always5 = always(5)

  t.is(5, always5())
  t.is(5, always5())
  t.is(5, always5())
})
