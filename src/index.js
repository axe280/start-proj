import './js/polyfills'
import 'jquery'
import Swiper from 'swiper/swiper-bundle.esm.js'
import 'owl.carousel2'
import 'magnific-popup'
import 'lity'

window.Swiper = Swiper

// all sprite icons svg
var req = require.context('./assets/icons', true, /^(.*\.(svg$))[^.]*$/)
req.keys().forEach(function(key){
    req(key)
})

// JS
import './js/index.js'
import './js/lazy/lazy.js'

// SCSS
import './assets/sass/main.sass'
