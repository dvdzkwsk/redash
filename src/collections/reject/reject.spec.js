var reject = require('./reject');

describe('.reject()', function () {
  it('Should return a new array that contains only elements that don\'t match the predicate function.', function () {
    var xs = [1,2,3,4,5,6],
        ys = reject(function (item) {
          return item % 2 === 0;
        }, xs);

    expect(ys).to.deep.equal([1,3,5]);
  });

  it('Should provide the element index as the second argument to the predicate function.', function () {
    var idxs = [];

    reject(function (_, idx) {
      idxs.push(idx);
    }, [undefined, undefined, undefined]);

    expect(idxs).to.deep.equal([0,1,2]);
  });

  it('Should return a curried function if only the predicate function is supplied.', function () {
    var curried = reject(function () {});

    expect(curried).to.be.a.function;
  });

  it('Should fully apply itself when both arguments are supplied.', function () {
    var curried = reject(function (item) {
      return item === 3;
    }),
        xs = [1,2,3];

    expect(curried([1,2,3])).to.have.length(2);
    expect(curried()()()([1,2,3])).to.have.length(2);
  });
});
