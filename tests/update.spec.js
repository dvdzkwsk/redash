const test       = require('ava')
    , sinon      = require('sinon')
    , { update } = require('../dist/redash')

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

test('applies a list transformation if the key is a number and the object is a list', (t) => {
  const obj = ['a', 'b', 'c', 'd']
      , res = update(2, x => x.toUpperCase(), obj)

  t.deepEqual(obj, ['a', 'b', 'c', 'd'])
  t.deepEqual(res, ['a', 'b', 'C', 'd'])
})

test('applies an object transformation if the key is a number and the object is a plain object', (t) => {
  const obj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
      , res = update(2, x => x.toUpperCase(), obj)

  t.deepEqual(obj, { 1: 'a', 2: 'b', 3: 'c', 4: 'd' })
  t.deepEqual(res, { 1: 'a', 2: 'B', 3: 'c', 4: 'd' })
})

test('passes `undefined` as the value if the key does not exist', (t) => {
  const obj = { age: 18 }
      , xform = sinon.spy(x => x)

  update('name', xform, obj)
  t.true(xform.calledWithExactly(undefined))
})

