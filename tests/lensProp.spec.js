const test         = require('ava')
    , { lensProp
      , over
      , set
      , view     } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(lensProp.length, 1)
})

test('returns a new lens', (t) => {
  const lens = lensProp('id')

  t.is(typeof lens.get, 'function')
  t.is(typeof lens.set, 'function')
})

test('correctly gets the target property using `view`', (t) => {
  t.is(view(lensProp('id'), { id: 5 }), 5)
})

test('correctly `set` the target property', (t) => {
  t.deepEqual(set(lensProp('id'), 5, { id: 1 }), { id: 5 })
})

test('correctly sets the target property when used with `over`', (t) => {
  const double = (x) => x * 2

  t.deepEqual(over(lensProp('id'), double, { id: 5 }), { id: 10 })
})

test('does not mutate the object when setting the property', (t) => {
  const obj    = { id: 5 }
      , double = (x) => x * 2

  set(lensProp('id'), 1, obj)
  over(lensProp('id'), double, obj)

  t.deepEqual(obj, { id: 5 })
})
