var keys = Redash.keys

describe('(Function) keys', (t) => {
  test('return all own properties of an object.', (t) => {
    keys({
      foo: true
    , bar: function () {}
    , baz: []
    }).should.deep.equal(['foo', 'bar', 'baz'])
  })

  test('exclude inherited properties', (t) => {
    function SomeClass () {}
    SomeClass.prototype.foo = 'foo'

    var obj = new SomeClass()
    obj.baz = true
    obj.bar = true

    keys(obj).should.deep.equal(['baz', 'bar'])
  })
})
