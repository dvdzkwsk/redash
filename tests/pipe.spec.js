const test     = require('ava')
    , sinon    = require('sinon')
    , { pipe } = require('../dist/redash')

test('properly reports its arity (is variadic)', (t) => {
  t.is(pipe.length, 0)
})

test('returns a function', (t) => {
  t.is(typeof pipe(() => {}), 'function')
})

test('correctly reports its arity to match the leftmost function', (t) => {
  const unary   = (a0) => {}
      , binary  = (a0, a1) => {}
      , ternary = (a0, a1, a2) => {}

  t.is(pipe(unary, binary, ternary).length, 1)
  t.is(pipe(binary, unary, ternary).length, 2)
  t.is(pipe(ternary, unary, binary).length, 3)
})

test('invokes the functions from left to right and returns the result of the last function', (t) => {
  const s1  = sinon.spy(x => x * 2)
      , s2  = sinon.spy(x => x + 2)
      , s3  = sinon.spy(x => x / 2)
      , res = pipe(s1, s2, s3)(4)

  t.true(s1.calledWithExactly(4))
  t.true(s1.calledBefore(s2))
  t.true(s2.calledWithExactly(8))
  t.true(s2.calledBefore(s3))
  t.true(s3.calledWithExactly(10))
  t.is(res, 5)
})

test('throws early if a non-function is passed', (t) => {
  t.throws(
    () => pipe(() => {}, undefined),
    'Invalid argument supplied to `pipe`. The argument at index [1] was not a function; ' +
    'what was received was of type: Nil.')
 })
