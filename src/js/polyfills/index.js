import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody

// forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

// isNan
if (!Number.isNan) {
  Object.defineProperty(Number, 'isNaN', {
    value: function (value) {
      return value !== value
    },
  })
}
