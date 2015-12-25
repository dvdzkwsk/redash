var keys = Redash.keys

describe('(Function) keys', function () {
  it('Should be a function.', function () {
    expect(keys).to.be.a('function')
  })
  
  it('Should return all own-props of an object.', function () {
    function SomeClass () {}
    SomeClass.prototype.foo = 'foo'
    
    var obj = new SomeClass()
    obj.baz = '__baz'
    obj.bar = '__bar'
    
    expect(keys(obj)).to.deep.equal(['baz', 'bar'])
    expect(keys({
      foo : '__foo',
      bar : '__bar',
      baz : '__baz'
    })).to.deep.equal(['foo', 'bar', 'baz'])
  })
})
