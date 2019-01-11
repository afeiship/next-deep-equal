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
      for (var key in inObj1) {
        if (inObj1.hasOwnProperty(key)) {
          var value = inObj1[key];
          return nx.deepEqObject(value, inObj2[key]);
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
