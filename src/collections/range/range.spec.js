var range = require('.');

describe('.range()', function () {

  it('Should return an array with all values between the start/end bounds (inclusive).', function () {
    var ones = range(1, 0, 100);
    var twos = range(2, 0, 100);
    var threes = range(3, 0, 100);

    expect(ones[0]).to.equal(0);
    expect(twos[0]).to.equal(0);
    expect(threes[0]).to.equal(0);

    expect(ones[ones.length - 1]).to.equal(100);
    expect(twos[twos.length - 1]).to.equal(100);
    expect(threes[threes.length - 1]).to.equal(99);
  });

  it('Should not exceed the upper bounds.', function () {
    expect(range(3,1,5)).to.deep.equal([1,4]);
  });

  it('Should return an empty array if the upper bound is less than the lower bounds and the incrementer is positive.', function () {
    expect(range(1, 1, 0)).to.be.an.array;
    expect(range(1, 1, 0)).to.have.length(0);
  });

  it('Should return an empty array if the upper bound is greater than the lower bounds and the incrementer is negative.', function () {
    expect(range(-1, 0, 1)).to.be.an.array;
    expect(range(-1, 0, 1)).to.have.length(0);
  });

  it('Should return an empty array if the incrementer is 0 (to prevent infinite loops).', function () {
    expect(range(0, 1, 100)).to.be.an.array;
    expect(range(0, 1, 100)).to.have.length(0);
  });

  it('Should return a 1-element array containing the start value if the start and end bounds are equal.', function () {
    expect(range(1, 1, 1)).be.an.array;
    expect(range(1, 1, 1)[0]).to.equal(1);
  });

  it('Should properly handle negative a lower bound with a positive upper bound.', function () {
    expect(range(1, -2, 2)).to.deep.equal([-2,-1,0,1,2]);
  });

  it('Should properly handle negative a lower bound with a negative upper bound.', function () {
    expect(range(1, -10, -5)).to.deep.equal([-10,-9,-8,-7,-6,-5]);
  });

  it('Should properly handle a positive lower bound with a negative lower bound and a negative incrementer.', function () {
    expect(range(-1, 2, -2)).to.deep.equal([2,1,0,-1,-2]);
  });

  it('Should properly handle a positive lower bound with a positive lower bound and a negative incrementer.', function () {
    expect(range(-1, 4, 2)).to.deep.equal([4,3,2]);
  });

  it('Should return a curried function when partially applied.', function () {
    var rangeWith1 = range(1),
        rangeWith3 = range(3);

    expect(rangeWith1()(1)()(5)).to.deep.equal([1,2,3,4,5]);
    expect(rangeWith1()(1, 5)).to.deep.equal([1,2,3,4,5]);

    expect(rangeWith3()(1)()(5)).to.deep.equal([1,4]);
    expect(rangeWith3()(1, 5)).to.deep.equal([1,4]);
  });
});
