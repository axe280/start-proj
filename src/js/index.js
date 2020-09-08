import $ from 'jquery'
import Swiper from 'swiper/swiper-bundle.esm.js'

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
    toggleDocumentScrollBlocker();
  });

  // sticky header
  function stickyHeader() {
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
      }, 50);
    }
  }

  stickyHeader();

  // page scroll blocker
  function toggleDocumentScrollBlocker() {
    var body = document.body;
  
    if (body.classList.contains('document-scroll-blocker')) {
      body.classList.remove('document-scroll-blocker');
    }
    else {
      body.classList.add('document-scroll-blocker');
    }
  }

  // data-lity
  $(document).on('lity:ready', function(event, instance) {
    toggleDocumentScrollBlocker();

    var el = instance.element();
    el.find('.lity-close').html(
      '<svg class="icon icon-close"><use xlink:href="assets/img/sprite.svg#close"></use></svg>'
    );
  });

  $(document).on('lity:close', function() {
    toggleDocumentScrollBlocker();
  });

  // magnific popup
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    mainClass: 'mfp-zoom',
    removalDelay: 300,
    cursor: null,
    callbacks: {
      open: function() {
        toggleDocumentScrollBlocker();
        $('.mfp-close').html('<svg class="icon icon-close"><use xlink:href="assets/img/sprite.svg#close"></use></svg>');
      },
      close: function() {
        toggleDocumentScrollBlocker();
      }
    }
  });

  $('.magnific-gallery').magnificPopup({
    delegate: 'button',
    type: 'image',
    midClick: true,
    cursor: null,
    gallery:{
      enabled: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><svg class="icon icon-arrow-prev"><use xlink:href="assets/img/sprite.svg#arrow-prev"></use></svg></button>',
      tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
    },
    mainClass: 'mfp-zoom',
    removalDelay: 300,
    callbacks: {
      open: function() {
        toggleDocumentScrollBlocker();
        $('.mfp-close').html('<svg class="icon icon-close"><use xlink:href="assets/img/sprite.svg#close"></use></svg>');
      },
      close: function() {
        toggleDocumentScrollBlocker();
      }
    }
  });
  
  // owl carousel
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    navText: [
      '<svg class="icon icon-arrow-prev"><use xlink:href="assets/img/sprite.svg#arrow-prev"></use></svg>',
      '<svg class="icon icon-arrow-next"><use xlink:href="assets/img/sprite.svg#arrow-next"></use></svg>'
    ],
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      740: {
        items: 3
      },
      1000: {
        items:5
      }
    }
  });

  // sliders
  new Swiper('.st-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      740: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });

  // swiper-outside-navi
  var swiperCollections = document.querySelectorAll('.st-swiper-outside-navi');

  swiperCollections.forEach(elem => {
    var elemSwiper = elem.querySelector('.swiper-container'),
        elemSwiperNext = elem.querySelector('.swiper-button-next'),
        elemSwiperPrev = elem.querySelector('.swiper-button-prev'),
        elemSwiperPagination = elem.querySelector('.swiper-pagination');

    new Swiper(elemSwiper, {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: elemSwiperNext,
        prevEl: elemSwiperPrev,
      },
      pagination: {
        el: elemSwiperPagination,
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        740: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        980: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
    });
  });

});