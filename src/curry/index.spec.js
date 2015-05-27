var curry = require('./index'),
    EXPECTED_FUNCTIONS = [
      'curry',
      'curryN'
    ];

describe('curry', function () {
  it('Should be an object.', function () {
    expect(curry).to.be.an.object;
  });

  EXPECTED_FUNCTIONS.forEach(function (fnName) {
    it('should have a method .' + fnName + '()', function () {
      expect(curry[fnName]).to.be.a.function;
    });
  });
});
