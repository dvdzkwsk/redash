module.exports = function implementsSameValueZero (fn, test) {
  test('Implements SameValueZero :: 0 === 0', (t) => {
    t.true(fn(0, 0))
  })

  test('Implements SameValueZero :: +0 === +0', (t) => {
    t.true(fn(+0, +0))
  })

  test('Implements SameValueZero :: -0 === -0', (t) => {
    t.true(fn(-0, -0))
  })

  test('Implements SameValueZero :: +0 !== -0', (t) => {
    t.true(fn(+0, -0))
  })

  test('Implements SameValueZero :: +0 === 0', (t) => {
    t.true(fn(+0, 0))
  })

  test('Implements SameValueZero :: -0 === 0', (t) => {
    t.true(fn(-0, 0))
  })

  test('Implements SameValueZero :: NaN === NaN', (t) => {
    t.true(fn(NaN, NaN))
  })

  test('Implements SameValueZero :: null === null', (t) => {
    t.true(fn(null, null))
  })

  test('Implements SameValueZero :: undefined === undefined', (t) => {
    t.true(fn(undefined, undefined))
  })
}
