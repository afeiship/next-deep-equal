(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var isObject = function(target) {
    return typeof target === 'object';
  };

  nx.deepEqObject = function(inObj1, inObj2) {
    if (inObj1 === inObj2) {
      return true;
    }

    if (inObj1 && inObj2 && isObject(inObj1) && isObject(inObj2)) {
      var keys = Object.keys(inObj1);
      var length = keys.length;
      if (length !== Object.keys(inObj2).length) {
        return false;
      }

      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!nx.deepEqObject(inObj1[key], inObj2[key])) {
          return false;
        }
      }
      return true;
    }

    return false;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepEqObject;
  }
})();
