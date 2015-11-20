var trace = function trace (m) {
  return function __trace__ (x) {
    console.log(m, x);
    return x;
  };
};

export default trace;