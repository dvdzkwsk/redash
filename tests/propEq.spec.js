var propEq = Redash.propEq

describe('(Function) propEq', (t) => {
  test('be a curried ternary function.', (t) => {
    propEq('foo').should.be.a('function')
    propEq('foo')('bar').should.be.a('function')
  })

  test('return true if the target property matches the target value.', (t) => {
    propEq('foo')('bar')({ foo: 'bar' }).should.equal(true)
    propEq('foo', 'bar')({ foo: 'bar' }).should.equal(true)
  })
})
