import { getScrollWidth } from './getScrollWidth.js'

export const addDocumentScrollBlocker = () => {
  const bodyWidth = document.body.clientWidth
  document.body.style.overflow = 'hidden'

  if (bodyWidth < document.body.clientWidth) {
    document.body.style.paddingRight = getScrollWidth() + 'px'
    return true
  }

  return false
}

export const removeDocumentScrollBlocker = () => {
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}
