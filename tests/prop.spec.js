var prop = Daedalus.prop;

describe('(Function) prop', function () {
  it('Should be a function.', function () {
    expect(prop).to.be.a('function');
  });
  
  it('Should be curried.', function () {
    expect(prop('foo')).to.be.a('function');
  });
  
  it('Should return the requested property off of the object.', function () {
    expect(prop('foo')({ foo : 'bar' })).to.equal('bar');
    expect(prop('foo', { foo : 'bar' })).to.equal('bar');
  });
});