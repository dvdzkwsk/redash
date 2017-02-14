const test    = require('ava')
    , { inc } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(inc.length, 1)
})

test('increments the provided number by 1', (t) => {
  t.is(inc(0), 1)
  t.is(inc(5), 6)
  t.is(inc(-1), 0)
})
