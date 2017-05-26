module.exports = function(env) {

  var callAsync = function(s, k, a, jsFunc, arg) {
    jsFunc(arg, function(returnVal) {
      global.resumeTrampoline(function() {
        return k(s, returnVal);
      });
    });
  };

  return {
    callAsync: callAsync
  };

};
