const test       = require('ava')
    , sinon      = require('sinon')
    , { update } = require('../dist/halcyon')

test('properly report its arity (is ternary)', (t) => {
  t.is(update.length, 3)
})

test('is curried', (t) => {
  t.is(typeof update('a')(x => x), 'function')
})

test('applies the result of the transformation to the object', (t) => {
  const obj = { name: 'joe', age: 18 }
      , xform = x => x.toUpperCase()

  t.deepEqual(update('name', xform, obj), { name: 'JOE', age: 18 })
})

test('does not mutate the original object', (t) => {
  const obj = { name: 'joe', age: 18 }
      , res = update('name', x => x, obj)

  t.not(obj, res)
  t.deepEqual(obj, res)
})

test('passes `undefined` as the value if the key does not exist', (t) => {
  const obj = { age: 18 }
      , xform = sinon.spy(x => x)

  update('name', xform, obj)
  t.true(xform.calledWithExactly(undefined))
})

