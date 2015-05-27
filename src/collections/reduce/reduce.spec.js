var reduce = require('.');

describe('.reduce()', function () {

  it('Should return a curried function if only a callback is provided.', function () {
    expect(reduce(function () {})).to.be.a.function;
    expect(reduce(function () {})()()()).to.be.a.function;
  });

  it('Should return a curried function if only a callback and accumulator are provided.', function () {
    var accum = {};

    expect(reduce(function () {}, accum)).to.be.a.function;
    expect(reduce(function () {})(accum)()()).to.be.a.function;
    expect(reduce(function () {})()()(accum)).to.be.a.function;
  });

  it('Should pass an accumulator to the callback for each element.', function () {
    var ys = reduce(function (accum, x) {
      return accum + x;
    }, 0, [1,2,3,4]);

    expect(ys).to.equal(10);
  });

  it('Should provide the element index as the callback\'s third argument.', function () {
    var idxs = [];

    var ys = reduce(function (_, _, idx) {
      idxs.push(idx);
    }, [], [1,2,3]);

    expect(idxs).to.deep.equal([0,1,2]);
  });
});
