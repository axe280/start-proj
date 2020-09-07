import $ from 'jquery'

export default function stickyHeader() {
  var $header = $('#header');
  var $body = $('body');
  var headerStickyTimer = null;

  if($header.length) {
    headerStickyCalc();

    $(window).on('scroll', function() {
      headerStickyCalc();
    });
  }

  function headerStickyCalc() {
    clearTimeout(headerStickyTimer);

    headerStickyTimer = setTimeout(function() {
      var headerHeight = $header.outerHeight();
      var headerOffsetTop = $header.offset().top;
      var scroll = $(window).scrollTop();

      if (scroll >= headerOffsetTop + headerHeight) {
        $body.addClass('header-sticky');
      }
      else {
        $body.removeClass('header-sticky');
      }
    }, 100);
  }
}