import $ from 'jquery'
import Swiper from 'swiper/swiper-bundle.esm.js'

import { debounce } from './helpers/debounce.js'

import './ui/changeSelectPlaceholderColor.js'
import { closeMenu } from './ui/mainMenu.js'
import { setDiffViewportVariable } from './ui/setDiffViewportVariable.js'

import './components/tabs.js'
import './components/magicLinePlugin.js'
import './components/ratingStars.js'
import './components/stickyCol.js'
import './components/animationInputs.js'
import './components/stickyHeader.js'
import './components/copyBtn.js'

$(function () {
  // page scroll blocker
  const body = document.body

  // click outside target
  $(document).on('click', function (e) {
    var $clicked = $(e.target)

    var removeOpenClass = function (targetClassName) {
      if (!$clicked.parents().hasClass(targetClassName)) {
        $('.' + targetClassName).removeClass('_opened')
      }
    }

    removeOpenClass('menu-item')
    removeOpenClass('dd-search-wrapp')
    removeOpenClass('dd-lang')
  })

  // my magic line
  $('.simple-tabs').myMagicLine()
  $('.magic-line-list').myMagicLine({
    variant: 'hover',
  })

  // tel mask
  $('input[type="tel"]').mask('+7 (999) 999-9999')

  // drop down items
  $('.menu-item__link._dd').on('click', function () {
    $(this).parent().toggleClass('_opened')
  })

  $('.dd-search-btn').on('click', function () {
    $(this).parent().addClass('_opened').find('input').focus()
  })

  $('.dd-lang-btn').on('click', function () {
    $(this).parent().toggleClass('_opened')
  })

  // magnific popup
  $('.open-modal-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-zoom',
    removalDelay: 300,
    cursor: null,
    showCloseBtn: false,
  })

  $('.magnific-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    midClick: true,
    cursor: null,
    closeOnBgClick: false,
    gallery: {
      enabled: true,
      tCounter: '<span class="mfp-counter">%curr% / %total%</span>',
    },
    mainClass: 'mfp-zoom',
    removalDelay: 300,
    callbacks: {
      buildControls: function () {
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight))
      },
    },
  })

  // owl carousel
  var onDragHandler = function () {
    document.ontouchmove = function (e) {
      e.preventDefault()
    }
  }

  var onDraggedHandler = function () {
    document.ontouchmove = function () {
      return true
    }
  }

  var defaultOwlOptions = {
    nav: true,
    onDrag: onDragHandler,
    onDragged: onDraggedHandler,
  }

  $('.st-carousel').owlCarousel(
    $.extend(
      {
        margin: 10,
        responsive: {
          0: {
            items: 1,
          },
          640: {
            items: 2,
          },
          740: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      },
      defaultOwlOptions
    )
  )

  // only mobile owl carousel
  var $mobileCarousel = null

  var initMobileCarousel = function () {
    $mobileCarousel = $('.mobile-carousel').owlCarousel(
      $.extend(
        {
          margin: 10,
          responsive: {
            0: {
              items: 2,
            },
            740: {
              items: 3,
            },
          },
        },
        defaultOwlOptions
      )
    )
  }

  var initCarouselResizeHandler = function ($selector, initFunc) {
    if ($selector && $selector.length && $(window).width() >= 740) {
      $selector.trigger('destroy.owl.carousel')
    } else if ($(window).width() < 740) {
      initFunc()
    }
  }

  initCarouselResizeHandler($mobileCarousel, initMobileCarousel)

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
    },
  })

  // swiper-outside-navi
  var swiperCollections = document.querySelectorAll('.st-swiper-outside-navi')

  swiperCollections.forEach((elem) => {
    var elemSwiper = elem.querySelector('.swiper-container'),
      elemSwiperNext = elem.querySelector('.swiper-button-next'),
      elemSwiperPrev = elem.querySelector('.swiper-button-prev'),
      elemSwiperPagination = elem.querySelector('.swiper-pagination')

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
      },
    })
  })

  // scroll active menu
  var $menuLinks = $('.header .menu .scrollto-js')
  var targetIds = []

  $menuLinks.each(function () {
    var attr = $(this).attr('href')
    targetIds.push(attr)
  })

  // var targetOffsetPos = 100

  // $(window).on('scroll', function () {
  //   $menuLinks.removeClass('_active')
  //   var currentPosition = $(window).scrollTop()

  //   targetIds.forEach(function (id) {
  //     var $target = $(id)
  //     var topTargetPos = $target.offset().top - targetOffsetPos
  //     var bottomTargetPos = $target.offset().top + $target.outerHeight()

  //     if (currentPosition > topTargetPos && currentPosition < bottomTargetPos) {
  //       $menuLinks.removeClass('_active')
  //       $menuLinks.each(function () {
  //         if ($(this).attr('href') === id) {
  //           $(this).addClass('_active')
  //         }
  //       })
  //     }
  //   })
  // })

  // slow scroll to
  $('a.scrollto-js').on('click', function () {
    if ($(window).width() < 980) {
      closeMenu()
    }

    var elementClick = $(this).attr('href')
    var destination = $(elementClick).offset().top
    jQuery('html:not(:animated),body:not(:animated)').animate(
      { scrollTop: destination },
      800
    )
    return false
  })

  // resize handlers
  setDiffViewportVariable()
  window.addEventListener('resize', debounce(setDiffViewportVariable, 200))

  // document resize hendler
  $(window).on(
    'resize',
    debounce(function () {
      // rebuild mobile owl carousel
      initCarouselResizeHandler($mobileCarousel, initMobileCarousel)

      // close burger menu
      if ($(window).width() >= 980 && $('body').hasClass('menu_opened')) {
        closeMenu()
      }
    }, 200)
  )
})
