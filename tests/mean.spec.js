const test     = require('ava')
    , { mean } = require('../dist/fp-standard')

test('properly reports its arity (is unary)', (t) => {
  t.is(mean.length, 1)
})

test('correctly calculates the mean', (t) => {
  t.is(mean([1, 2, 3, 4, 5, 6]), 3.5)
})

test('throws if the list is empty', (t) => {
  t.throws(
    () => mean([]),
    'Cannot calculate the mean of an empty list.'
  )
})
