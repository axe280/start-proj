export const initAnimationInput = () => {
  const $inputs = document.querySelectorAll('._animation-label input')
  const $textarea = document.querySelectorAll('._animation-label textarea')

  const $fields = Array.from($inputs).concat(Array.from($textarea))

  $fields.forEach(($field) => {
    const $parent = $field.closest('.field-item')
    const isFieldNotEmpty = ($el) => $el.value.trim() !== ''

    if (isFieldNotEmpty($field)) {
      $parent.classList.add('_focused')
    }

    $field.addEventListener('focus', () => {
      $parent.classList.add('_focused')
    })

    $field.addEventListener('blur', (e) => {
      if (!isFieldNotEmpty(e.target)) {
        $parent.classList.remove('_focused')
      }
    })
  })
}
