// jquery
import $ from 'jquery'
window.$ = $
window.jQuery = $

// all sprite icons svg
var req = require.context('./assets/icons', true, /^(.*\.(svg$))[^.]*$/);
req.keys().forEach(function(key){
    req(key);
})


// JS
import './js/index.js'
import './assets/sass/shapes/shapes.js'
import './assets/sass/textWork/textwork.js'

// SCSS
import './assets/sass/main.sass'
