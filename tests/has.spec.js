var has = Redash.has

describe('(Function) has', (t) => {
  test('properly report its arity (is binary)', (t) => {
    has.should.have.length(2)
  })

  test('be curried', (t) => {
    has(5).should.be.a('function')
  })

  test('return `true` when the object has the property', (t) => {
    has('hello', { hello: 'foo' }).should.equal(true)
  })

  test('return `false` when the object does not have the property', (t) => {
    has('hello', { notHello: 'foo' }).should.equal(false)
  })

  test('should ignore inherited properties', (t) => {
    function Foo () {}
    Foo.prototype.bar = function () {}
    var foo = new Foo()

    has('bar', foo).should.equal(false)

    foo.bar = function () {}
    has('bar', foo).should.equal(true)
  })
})
