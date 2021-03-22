import $ from 'jquery'

$(function () {
  function stickyHeader() {
    var $header = $('#header')
    var headerStickyTimer = null

    if ($header.length) {
      headerStickyCalc()

      $(window).on('scroll', function () {
        headerStickyCalc()
      })
    }

    function headerStickyCalc() {
      clearTimeout(headerStickyTimer)

      headerStickyTimer = setTimeout(function () {
        var headerHeight = $header.outerHeight()
        var headerOffsetTop = $header.offset().top
        var scroll = $(window).scrollTop()

        if (scroll >= headerOffsetTop + headerHeight) {
          $header.addClass('header_sticky')
        } else {
          $header.removeClass('header_sticky')
        }
      }, 50)
    }
  }

  stickyHeader()
})
