var is = Redash.is

describe('(Function) is', (t) => {
  test('properly report its arity (is binary)', (t) => {
    is.should.have.length(2)
  })

  test('be curried', (t) => {
    is('string').should.be.a('function')
  })

  test('perform typeof checks when the type is a string', (t) => {
    is('string', 'hello').should.equal(true)
    is('string', 1).should.equal(false)
    is('number', 1).should.equal(true)
    is('number', 'hello').should.equal(false)
  })

  test('perform instanceof checks against a provided class function', (t) => {
    function Person () {}

    is(Person, new Person()).should.equal(true)
  })
})
