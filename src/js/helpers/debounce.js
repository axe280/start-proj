export default function (fn, delay) {
  var timeout

  return function () {
    clearTimeout(timeout)
    var args = arguments
    timeout = setTimeout(function () {
      fn.apply(this, args)
    }, delay || 200)
  }
}
