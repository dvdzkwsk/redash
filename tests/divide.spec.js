const test       = require('ava')
    , { divide } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(divide.length, 2)
})

test('is curried', (t) => {
  t.is(typeof divide(2), 'function')
})

test('divides the second argument by the first', (t) => {
  t.is(divide(2, 8), 4)
})

test('throws if the divisor is 0', (t) => {
  t.throws(() => divide(0, 8), /Cannot divide by 0/)
})
