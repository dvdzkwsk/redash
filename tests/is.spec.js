var is = Redash.is

describe('(Function) is', function () {
  it('Should properly report its arity (is binary)', function () {
    is.should.have.length(2)
  })

  it('Should be curried', function () {
    is('string').should.be.a('function')
  })

  it('Should perform typeof checks when the type is a string', function () {
    is('string', 'hello').should.equal(true)
    is('string', 1).should.equal(false)
    is('number', 1).should.equal(true)
    is('number', 'hello').should.equal(false)
  })

  it('Should perform instanceof checks against a provided class function', function () {
    function Person () {}

    is(Person, new Person()).should.equal(true)
  })
})
