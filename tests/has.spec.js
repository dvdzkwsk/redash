var has = Redash.has

describe('(Function) has', function () {
  it('Should properly report its arity (is binary)', function () {
    has.should.have.length(2)
  })

  it('Should be curried', function () {
    has(5).should.be.a('function')
  })

  it('Should return `true` when the object has the property', function () {
    has('hello', { hello: 'foo' }).should.equal(true)
  })

  it('Should return `false` when the object does not have the property', function () {
    has('hello', { notHello: 'foo' }).should.equal(false)
  })

  it('Should should ignore inherited properties', function () {
    function Foo () {}
    Foo.prototype.bar = function () {}
    var foo = new Foo()

    has('bar', foo).should.equal(false)

    foo.bar = function () {}
    has('bar', foo).should.equal(true)
  })
})
