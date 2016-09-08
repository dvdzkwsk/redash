const test         = require('ava')
    , { identity } = require('../dist/stdlib')

test('properly reports its arity (is unary)', (t) => {
  t.is(identity.length, 1)
})

test('returns the value it is given', (t) => {
  const obj = {}

  t.is(identity(5), 5)
  t.is(identity(obj), obj)
})
