import $ from 'jquery'

import './components/tabs.js'
import './components/magicLine.js'
import './components/ratingStars.js'
import './components/stickyCol.js'
import '../assets/sass/shapes/shapes.js'
import '../assets/sass/textWork/textwork.js'

$(function() {

  // open mobile menu
  $('.burger-menu').click(function() {
    $('body').toggleClass('menu_opened');
  });

});