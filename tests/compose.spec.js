const test        = require('ava')
    , sinon       = require('sinon')
    , { compose } = require('../dist/redash')

test('returns a function', (t) => {
  const fn = () => {}

  t.is('function', typeof compose(fn, fn))
})

test('correctly reports its resulting arity to match the rightmost function', (t) => {
  const unary   = (a0) => {}
      , binary  = (a0, a1) => {}
      , ternary = (a0, a1, a2) => {}

  t.is(compose(unary, binary, ternary).length, 3)
  t.is(compose(ternary, binary, unary).length, 1)
})

test('is curried to the arity of the rightmost function', (t) => {
  const unary   = sinon.spy((a0) => {})
      , binary  = sinon.spy((a0, a1) => {})
      , ternary = sinon.spy((a0, a1, a2) => {})

  compose(unary, binary, ternary)()
  t.is(0, ternary.callCount)

  compose(unary, binary, ternary)(1)
  t.is(0, ternary.callCount)

  compose(unary, binary, ternary)(1)()
  compose(unary, binary, ternary)(1)(2)
  t.is(0, ternary.callCount)

  compose(unary, binary, ternary)(1)(2)()
  t.is(0, ternary.callCount)

  compose(unary, binary, ternary)(1)(2)(3)
  t.is(1, ternary.callCount)
})

test('invokes the functions from right to left', (t) => {
  const s1 = sinon.spy()
      , s2 = sinon.spy()
      , s3 = sinon.spy()

  compose(s1, s2, s3)(0)
  t.true(s3.calledBefore(s2))
  t.true(s2.calledBefore(s1))
  t.true(s1.calledOnce)
})
