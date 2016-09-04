var toPairs = Redash.toPairs

describe('(Function) toPairs', (t) => {
  test('properly report its arity (is unary)', (t) => {
    toPairs.should.have.length(1)
  })

  test('return an array of key/value tuples', (t) => {
    toPairs({
      foo: 'bar'
    , baz: 'biz'
    }).should.deep.equal([
      ['foo', 'bar']
    , ['baz', 'biz']
    ])
  })

  test('return an empty list if the object is empty', (t) => {
    toPairs({})
      .should.deep.equal([])
  })

  test('ignore inherited properties', (t) => {
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
