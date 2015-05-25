const extend = (base, extender) => {
  for (let prop in extender) {
    if (extender.hasOwnProperty(prop)) {
      if (
        typeof base[prop] === 'undefined' ||
        typeof extender[prop] !== 'object' ||
        Array.isArray(extender[prop])
      ) {
        base[prop] = extender[prop];
      } else {
        base[prop] = extend(base[prop], extender[prop]);
      }
    }
  }
  return base;
};

module.exports = extend;
