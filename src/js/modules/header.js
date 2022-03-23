import {
  addDocumentScrollBlocker,
  removeDocumentScrollBlocker,
} from '../ui/documentScrollBlocker.js'
import { debounce } from '../helpers/debounce.js'

export const initHeaderScripts = () => {
  const $burgerBtn = document.querySelector('.burger-menu-wrapp')
  const $langBtn = document.querySelector('.dd-lang-btn')
  const $searchBtn = document.querySelector('.dd-search-btn')
  const $body = document.body

  // burger menu
  if ($burgerBtn) {
    $burgerBtn.addEventListener('click', () => {
      if ($body.classList.contains('menu_opened')) {
        $body.classList.remove('menu_opened')
        removeDocumentScrollBlocker('.header-inner')
      } else {
        $body.classList.add('menu_opened')
        addDocumentScrollBlocker('.header-inner')
      }
    })
  }

  // lang
  if ($langBtn) {
    $langBtn.addEventListener('click', () => {
      $langBtn.parentElement.classList.toggle('_opened')
    })
  }

  // search
  if ($searchBtn) {
    $searchBtn.addEventListener('click', () => {
      $searchBtn.parentElement.classList.toggle('_opened')
      $body.classList.add('search_opened')

      const $input = $searchBtn.parentElement.querySelector('input')
      if ($input) {
        $input.focus()
      }
    })
  }

  // sticky header
  const $header = document.querySelector('.header')
  const $scrollBtnUp = document.querySelector('.scroll-btn-up')
  const HEADER_TOP_OFFSET = 30
  const SHOW_BUTTON_TOP_OFFSET = 500

  const headerScrollHandler = () => {
    if ($header) {
      if (window.pageYOffset > HEADER_TOP_OFFSET) {
        $header.classList.add('_sticky')
      } else {
        $header.classList.remove('_sticky')
      }
    }

    if ($scrollBtnUp) {
      if (window.pageYOffset > SHOW_BUTTON_TOP_OFFSET) {
        $scrollBtnUp.classList.add('_visible')
      } else {
        $scrollBtnUp.classList.remove('_visible')
      }
    }
  }

  // add sticky class
  headerScrollHandler()
  document.addEventListener('scroll', debounce(headerScrollHandler, 100))
}
