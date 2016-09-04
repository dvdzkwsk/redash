var merge = Redash.merge

describe('(Function) merge', (t) => {
  test('properly report its arity (is binary)', (t) => {
    merge.should.have.length(2)
  })

  test('be curried', (t) => {
    expect(merge({})).to.be.a('function')
  })

  test('merge all own properties of the second argument onto the first', (t) => {
    merge({ foo: 'bar' }, { foo: 'baz' })
      .should.deep.equal({
        foo: 'baz'
      })
  })

  test('always return a new object', (t) => {
    var a = { foo: 'bar' }
    merge({}, a).should.not.equal(a) // compare references
    merge({}, a).should.deep.equal(a) // compare values

    merge(a, {}).should.not.equal(a)  // compare references
    merge(a, {}).should.deep.equal(a) // compare values

    // ensure `a` was not mutated
    a.should.deep.equal({ foo: 'bar' })
  })

  test('ignore prototype/inherited properties', (t) => {
    var foo

    function Foo () {}
    Foo.prototype.bar = 'bar'
    foo = new Foo()
    foo.baz = 'baz'

    merge(foo, {})
      .should.deep.equal({
        baz: 'baz'
      })
  })
})
