const test        = require('ava')
    , sinon       = require('sinon')
    , { mapKeys } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(mapKeys.length, 2)
})

test('is curried', (t) => {
  t.is(typeof mapKeys(() => {}), 'function')
})

test('calls the transformer with a single argument: key', (t) => {
  const spy = sinon.spy()
  mapKeys(spy, { a: 1 })
  t.true(spy.calledWithExactly('a'))
})

test('transforms own enumerable properties', (t) => {
  t.deepEqual(
    mapKeys(key => '@@' + key, { a: 1, b: 2 }),
    { '@@a': 1, '@@b': 2 })
})

test('ignores inherited properties', (t) => {
  function A () {}
  A.prototype.foo = () => {}
  const a = new A()
  a.bar = () => {}

  t.deepEqual(
    mapKeys(key => '@@' + key, a),
    { '@@bar': a.bar })
})

test('always returns a new object', (t) => {
  const obj = { a: 1, b: 2, c: 3 }
      , res = mapKeys(key => key, obj)

  t.deepEqual(res, obj) // compare values
  t.not(res, obj)       // compare references
})
