var toPairs = Redash.toPairs

describe('(Function) toPairs', function () {
  it('Should properly report its arity (is unary)', function () {
    toPairs.should.have.length(1)
  })

  it('Should return an array of key/value tuples', function () {
    toPairs({
      foo: 'bar'
    , baz: 'biz'
    }).should.deep.equal([
      ['foo', 'bar']
    , ['baz', 'biz']
    ])
  })

  it('Should return an empty list if the object is empty', function () {
    toPairs({})
      .should.deep.equal([])
  })

  it('Should ignore inherited properties', function () {
    var foo

    function Foo () {}
    Foo.prototype.foo = function () {}
    foo = new Foo()
    foo.bar = function () {}

    toPairs(foo)
      .should.deep.equal([
        ['bar', foo.bar]
      ])
  })
})
