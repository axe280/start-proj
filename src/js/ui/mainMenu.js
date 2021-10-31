import { getScrollWidth } from '../helpers/getScrollWidth.js'
import {
  addDocumentScrollBlocker,
  removeDocumentScrollBlocker,
} from '../helpers/documentScrollBLocker'

const $body = document.body

export const openMenu = () => {
  $body.classList.add('menu_opened')
  const isBodyScroll = addDocumentScrollBlocker()

  if (isBodyScroll) {
    const $fixedMenuPanel = document.querySelector(
      '.menu_opened .header_sticky .header-inner'
    )

    if ($fixedMenuPanel) {
      $fixedMenuPanel.style.right = getScrollWidth() + 'px'
    }
  }
}

export const closeMenu = () => {
  $body.classList.remove('menu_opened')
  removeDocumentScrollBlocker()

  const $fixedMenuPanel = document.querySelector('.header_sticky .header-inner')

  if ($fixedMenuPanel) {
    $fixedMenuPanel.style.right = ''
  }
}

// init menu
const $burgerButton = document.querySelector('.burger-menu')

if ($burgerButton) {
  $burgerButton.addEventListener('click', () => {
    const isMenuOpened = $body.classList.contains('menu_opened')
    isMenuOpened ? closeMenu() : openMenu()
  })
}

const $menuCloseOverlay = document.querySelector('.menu-close-overlay')

if ($menuCloseOverlay) {
  $menuCloseOverlay.addEventListener('click', closeMenu)
}
