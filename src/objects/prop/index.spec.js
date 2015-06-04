var prop = require('./');

describe('.prop()', function () {

  it('Should return a curried function if only one argument is supplied.', function () {
    expect(prop('foo')).to.be.a.function;
  });

  it('Should return the value of the supplied property on the target object.', function () {
    expect(prop('foo', { foo : 'baz' })).to.equal('baz');
    expect(prop('foo', { foo : [1,2,3] })).to.deep.equal([1,2,3]);
  });

  it('Should return undefined if the target object does not have the desired property.', function () {
    expect(prop('foo', {})).to.be.undefined;
  });

  it('Should include inherited properties.', function () {
    function SomePrototype () {}
    SomePrototype.prototype.foo = function () {};

    expect(prop('foo', new SomePrototype())).to.be.a.function;
  });

  it('Should throw if the second argument is not an object.', function () {
    expect(function () { prop('foo', undefined); }).to.throw;
    expect(function () { prop('foo', 1); }).to.throw;
    expect(function () { prop('foo', 'baz'); }).to.throw;
  });
});
