var noop;
// this works for node and the browser, could work for other things as well
if ('undefined' === typeof console) {
  noop = function () {};
  module.exports = {
    log: noop,
    error: noop,
    dir: noop
  };
} else {
  module.exports = console;
}