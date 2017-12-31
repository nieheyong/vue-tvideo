//https://github.com/angus-c/just/blob/master/packages/function-debounce/index.js
export function debounce(fn, wait, callFirst) {
  var timeout;
  return function () {
    if (!wait) {
      return fn.apply(this, arguments);
    }
    var context = this;
    var args = arguments;
    var callNow = callFirst && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!callNow) {
        return fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      return fn.apply(this, arguments);
    }
  };
}
//https://github.com/vasanthk/js-utils/blob/master/js/throttle.js
export function throttle(fn, interval, callFirst) {
  var wait = false;
  var callNow = false;
  return function () {
    callNow = callFirst && !wait;
    var context = this;
    var args = arguments;
    if (!wait) {
      wait = true;
      setTimeout(function () {
        wait = false;
        if (!callFirst) {
          return fn.apply(context, args);
        }
      }, interval);
    }
    if (callNow) {
      callNow = false;
      return fn.apply(this, arguments);
    }
  };
}
