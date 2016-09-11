const test   = require('ava')
    , { lt } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(lt.length, 2)
})

test('is curried', (t) => {
  t.is(typeof lt(5), 'function')
})

test('returns true when the second argument is less than the first', (t) => {
  t.true(lt(5, 0))
  t.true(lt(1, -1))
})

test('returns false when the two arguments are equal', (t) => {
  t.false(lt(5, 5))
})

test('returns false when the second argument is greater than the first', (t) => {
  t.false(lt(0, 5))
})
