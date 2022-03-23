import { getScrollWidth } from '../helpers/getScrollWidth.js'

export const addDocumentScrollBlocker = (paddingScrollSelector) => {
  const bodyWidth = document.body.clientWidth
  document.body.style.overflow = 'hidden'

  const $paddingScrollEl = document.querySelector(paddingScrollSelector)

  if (bodyWidth < document.body.clientWidth) {
    document.body.style.paddingRight = getScrollWidth() + 'px'

    if ($paddingScrollEl) {
      $paddingScrollEl.style.right = getScrollWidth() + 'px'
    }
  }
}

export const removeDocumentScrollBlocker = (paddingScrollSelector) => {
  const $paddingScrollEl = document.querySelector(paddingScrollSelector)
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''

  if ($paddingScrollEl) {
    $paddingScrollEl.style.right = 0
  }
}
