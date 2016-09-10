const test   = require('ava')
    , { of } = require('../dist/fp-standard')

test('properly reports its arity (is unary)', (t) => {
  t.is(of.length, 1)
})

test('wrap the value in an array', (t) => {
  t.deepEqual(of('foo'), ['foo'])
})

test('wraps arrays', (t) => {
  t.deepEqual(of(['foo', 'bar']),  [['foo', 'bar']])
})
