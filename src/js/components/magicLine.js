import $ from 'jquery'

$(function() {
  // magic line
  $('[data-magic-line]').each(function() {
    var $magicLineWrap = $(this);
    var magicEventName = $magicLineWrap.data().magicLine;

    $magicLineWrap.append('<li class="magic-line"></li>');
    var $magicLine = $magicLineWrap.find('.magic-line');
    magicLineAnimate($magicLineWrap.children().first());
    
    if (magicEventName === 'click') {
      $magicLineWrap.on('click', 'li:not(.magic-line)', function() {
        magicLineAnimate($(this));
      });
    }
    
    if (magicEventName === 'hover') {
      var $targetElems = $magicLineWrap.children('li:not(.magic-line)');
      $targetElems.hover(function() {
        magicLineAnimate($(this));
      });
    }

    function magicLineAnimate($el) {
      $magicLine.stop().animate({
        left: $el.position().left,
        width: $el.outerWidth()
      },
      250);
    }
  });
});