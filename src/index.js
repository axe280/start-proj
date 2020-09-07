// jquery
import 'jquery'
import Swiper from 'swiper/swiper-bundle.esm.js'
import 'owl.carousel2'
import 'magnific-popup'
import 'lity'

// if (!Number.isNan) {
//   Object.defineProperty(Number, 'isNaN', {
//       value: function(value) {     
//       return value !== value;
//       }
//   });
// }

import svg4everybody from 'svg4everybody'
svg4everybody()

window.Swiper = Swiper

// all sprite icons svg
var req = require.context('./assets/icons', true, /^(.*\.(svg$))[^.]*$/)
req.keys().forEach(function(key){
    req(key)
})

// JS
import './js/index.js'

// SCSS
import './assets/sass/main.sass'
