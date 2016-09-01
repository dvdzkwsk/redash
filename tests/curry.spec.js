const test      = require('ava')
    , sinon     = require('sinon')
    , { curry } = require('../dist/redash')

test('properly report its arity (is unary)', (t) => {
  t.is(curry.length, 1)
})

test('return a function', (t) => {
  t.is(typeof curry(() => {}), 'function')
})

test('curries based off of function length', (t) => {
  const curr0 = sinon.spy(curry(() => {}))
      , curr1 = sinon.spy(curry((a) => {}))
      , curr2 = sinon.spy(curry((a, b) => {}))
      , curr3 = sinon.spy(curry((a, b, c) => {}))

  t.is(typeof curr0, 'function')
  t.is(typeof curr1, 'function')
  t.is(typeof curr1(), 'function')
  t.not(typeof curr1(1), 'function')
  t.is(typeof curr2, 'function')
  t.is(typeof curr2(), 'function')
  t.is(typeof curr2(1), 'function')
  t.not(typeof curr2(1, 2), 'function')
  t.is(typeof curr3, 'function')
  t.is(typeof curr3(), 'function')
  t.is(typeof curr3(1), 'function')
  t.is(typeof curr3(1, 2), 'function')
  t.not(typeof curr3(1, 2, 3), 'function')
})

test('only invokes the function once all arguments are supplied', (t) => {
  const add3 = (a, b, c) => a + b + c

  t.is(6, curry(add3)()()(1)()(2)()(3))
})

test('reports the correct arity via function.length', (t) => {
  t.is(curry(() => {}).length, 0)
  t.is(curry((a0) => {}).length, 1)
  t.is(curry((a0, a1) => {}).length, 2)
  t.is(curry((a0, a1, a2) => {}).length, 3)
  t.is(curry((a0, a1, a2, a3) => {}).length, 4)
  t.is(curry((a0, a1, a2, a3, a4) => {}).length, 5)
  t.is(curry((a0, a1, a2, a3, a4, a5) => {}).length, 6)
})

test('throws if the target function has an arity > 6', (t) => {
  t.throws(() => curry((a0, a1, a2, a3, a4, a5, a6, a7) => {}))
})
