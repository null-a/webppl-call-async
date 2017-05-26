var pause = function(delay, jsCallback) {
  console.log('pausing for ' + delay + ' ms...');
  setTimeout(function() {
    console.log('resuming...');
    jsCallback(delay);
  }, delay);
};

module.exports = {
  pause: pause
};
