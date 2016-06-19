var keys = Redash.keys

describe('(Function) keys', function () {
  it('Should return all own properties of an object.', function () {
    keys({
      foo: true,
      bar: function () {},
      baz: [],
    }).should.deep.equal(['foo', 'bar', 'baz'])
  })

  it('Should exclude inherited properties', function () {
    function SomeClass () {}
    SomeClass.prototype.foo = 'foo'

    var obj = new SomeClass()
    obj.baz = true
    obj.bar = true

    keys(obj).should.deep.equal(['baz', 'bar'])
  })
})
