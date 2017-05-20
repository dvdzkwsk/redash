const test         = require('ava')
    , sinon        = require('sinon')
    , { updateIn } = require('../dist/redash')

test('properly report its arity (is ternary)', (t) => {
  t.is(updateIn.length, 3)
})

test('is curried', (t) => {
  t.is(typeof updateIn(['a'])(x => x), 'function')
})

test('applies the result of the transformation to the object', (t) => {
  const obj = { info: { data: { age: 17 } } }
      , xform = x => x + 1
      , res = updateIn(['info', 'data', 'age'], xform, obj)

  t.deepEqual(res, { info: { data: { age: 18 } } })
})

test('works for arrays', (t) => {
  const obj = { info: [{ data: ['foo', 'bar'] }] }
      , xform = x => x.toUpperCase()
      , res = updateIn(['info', 0, 'data', 1], xform, obj)

  t.deepEqual(obj, { info: [{ data: ['foo', 'bar'] }] })
  t.deepEqual(res, { info: [{ data: ['foo', 'BAR'] }] })
})

test('does not mutate any objects in the path sequence', (t) => {
  const obj = { info: { data: { age: 17 } } }
      , xform = x => x + 1
      , res = updateIn(['info', 'data', 'age'], xform, obj)

  t.not(obj, res)
  t.not(obj.info, res.info)
  t.deepEqual(obj, { info: { data: { age: 17 } } })
  t.deepEqual(res, { info: { data: { age: 18 } } })
})

test('passes `undefined` as the value if the key does not exist', (t) => {
  const obj = { info: { data: {} } }
      , xform = sinon.spy()

  updateIn(['info', 'data', 'age'], xform, obj)
  t.true(xform.calledWithExactly(undefined))
})

test('creates objects for keys that do not exist', (t) => {
  const obj = {}
      , xform = () => 'foo'
      , res = updateIn(['a', 'b', 'c'], xform, obj)

  t.deepEqual(obj, {})
  t.deepEqual(res, { a: { b: { c: 'foo' } } })
})

test('creates an object, not a list, for undefined values when the path is a number', (t) => {
  const obj = {}
      , xform = x => x
      , res = updateIn(['a', 0, 1, 'b'], xform, obj)

  t.is(typeof res.a, 'object')
  t.false(Array.isArray(res.a))
  t.is(typeof res.a['0'], 'object')
  t.false(Array.isArray(res.a['1']))
  t.deepEqual(res, { a: { 0: { 1: { b: undefined } } } })
})
