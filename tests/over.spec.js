const test     = require('ava')
    , sinon    = require('sinon')
    , { lens
      , assoc
      , get
      , over } = require('../dist/redash')

test('properly reports its arity (is ternary)', (t) => {
  t.is(over.length, 3)
})

test('calls the getter, transformer, and setter exactly once', (t) => {
  const getter = sinon.spy(get('foo'))
      , setter = sinon.spy(assoc('foo'))
      , xform  = sinon.spy(x => x * 2)

  over(lens(getter, setter), xform, { foo: 2 })
  t.true(getter.calledBefore(xform))
  t.true(xform.calledBefore(setter))
  t.is(getter.callCount, 1)
  t.is(xform.callCount, 1)
  t.is(setter.callCount, 1)
})

test('returns the target object with its value transformed at the lens path', (t) => {
  t.deepEqual(over(lens(get('foo'), assoc('foo')), x => x * 2, { foo: 2 })
            , { foo: 4 })
})
