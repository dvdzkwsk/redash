var merge = Redash.merge

describe('(Function) merge', function () {
  it('Should properly report its arity (is binary)', function () {
    merge.should.have.length(2)
  })

  it('Should be curried', function () {
    expect(merge({})).to.be.a('function')
  })

  it('Should merge all own properties of the second argument onto the first', function () {
    merge({ foo: 'bar' }, { foo: 'baz' })
      .should.deep.equal({
        foo: 'baz'
      })
  })

  it('Should always return a new object', function () {
    var a = { foo: 'bar' }
    merge({}, a).should.not.equal(a) // compare references
    merge({}, a).should.deep.equal(a) // compare values

    merge(a, {}).should.not.equal(a)  // compare references
    merge(a, {}).should.deep.equal(a) // compare values

    // ensure `a` was not mutated
    a.should.deep.equal({ foo: 'bar' })
  })

  it('Should ignore prototype/inherited properties', function () {
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
