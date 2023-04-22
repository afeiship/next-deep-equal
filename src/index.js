import nx from '@jswork/next';

const isObject = (inObj) => inObj && typeof inObj === 'object';

nx.deepEqual = function (inObj1, inObj2) {
  if (inObj1 === inObj2) return true;

  if (isObject(inObj1) && isObject(inObj2)) {
    var keys = Object.keys(inObj1);
    var length = keys.length;

    if (length !== Object.keys(inObj2).length) return false;

    for (var i = 0; i < length; i++) {
      var key = keys[i];
      var val1 = inObj1[key];
      var val2 = inObj2[key];
      if (!nx.deepEqual(val1, val2)) return false;
    }

    return true;
  }

  return false;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.deepEqual;
}

export default nx.deepEqual;
