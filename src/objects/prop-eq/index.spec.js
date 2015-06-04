var propEq = require('./');

describe('.propEq()', function () {

  it('Should return a curried function if only one argument is supplied.', function () {
    expect(propEq('foo')).to.be.a.function;
  });

  it('Should return a curried function if only two arguments are supplied.', function () {
    expect(propEq('foo')('buzz')).to.be.a.function;
  });

  it('Should return whether the target property strictly equals the specified value', function () {
    expect(propEq('foo', 'buzz', { foo : 'buzz' })).to.be.true;
  });

  it('Should return false if the values are not strictly equal.', function () {
    expect(propEq('foo', 0, { foo : '0' })).to.be.false;
    expect(propEq('foo', false, { foo : 0 })).to.be.false;
    expect(propEq('foo', true, { foo : 1 })).to.be.false;
    expect(propEq('foo', true, { foo : {} })).to.be.false;
  });

  it('Should return false if object references are different.', function () {
    expect(propEq('foo', { bar : 'baz' }, { foo : { bar : 'baz' }})).to.be.false;
  });

  it('Should return true if object references are the same.', function () {
    var obj = { foo : { bar : 'baz' }};

    expect(propEq('foo', obj.foo, obj)).to.be.true;
  });
});
