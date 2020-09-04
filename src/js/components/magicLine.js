import $ from 'jquery'

$(function() {
  // magic line
  $('[data-magic-line]').each(function() {
    var $magicLineWrap = $(this);
    var magicEventName = $magicLineWrap.data().magicLine;
    $magicLineWrap.append('<li class="magic-line"></li>');
    var $magicLine = $magicLineWrap.find('.magic-line');

    if (magicEventName === 'click') {
      var $targetElems = $magicLineWrap.children('li:not(.magic-line)');
      magicLineAnimate($targetElems.first());
      
      $targetElems.click(function() {
        magicLineAnimate($(this));
      });
    }
    
    if (magicEventName === 'hover') {
      var $targetElems = $magicLineWrap.children('li').children('a');
      magicLineAnimate($targetElems.first());

      $targetElems.hover(function() {
        magicLineAnimate($(this));
      });
    }

    function magicLineAnimate($el) {
      $magicLine.stop().animate({
        left: $el.position().left,
        width: $el.outerWidth()
      },
      250)
    }
  });
});