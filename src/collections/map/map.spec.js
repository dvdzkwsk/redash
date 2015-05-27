var map = require('.');

describe('.map()', function () {

  it('Should return a curried function if only a callback is provided.', function () {
    expect(map(function () {})).to.be.a.function;
    expect(map(function () {})()()()).to.be.a.function;
  });

  it('Should provide the element index as the callback\'s second argument.', function () {
    var idxs = [];

    var ys = map(function (_, idx) {
      idxs.push(idx);
    }, [1,2,3]);

    expect(idxs).to.deep.equal([0,1,2]);
  });

  it('Should return a new collection containing the results of the function application to all elements.', function () {
    var ys = map(function (x) {
      return x * 2;
    }, [1,2,3,4]);

    expect(ys).to.deep.equal([2,4,6,8]);
  });

  it('Should not mutate the original collection.', function () {
    var xs = [1,2,3,4],
        ys = map(function (x) {
          return x * 2;
        }, xs);

    expect(xs).to.deep.equal([1,2,3,4]);
    expect(ys).to.not.deep.equal(xs);
  });

  it('Should not dereference objects from the original collection (intentional).', function () {
    var xs = [{ id : 1 }],
        ys = map(function (x) {
          x.id++;
          return x;
        }, xs);

    expect(xs).to.deep.equal(ys);
    expect(xs[0].id).to.equal(2);
  });
});
