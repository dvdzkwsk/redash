var prop = Redash.prop

describe('(Function) prop', (t) => {
  test('be a curried binary function', (t) => {
    prop('foo').should.be.a('function')
  })

  test('return the requested property off of the object', (t) => {
    prop('foo', { foo: 'bar' }).should.equal('bar')
  })

  test('return undefined when the property is not defined', (t) => {
    expect(prop('foo', {})).to.equal(undefined)
  })
})
