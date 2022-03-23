export const removeClassOutsideHandler = (e) => {
  const removeOpenedClass = (targetClassName) => {
    const $targetEl = document.querySelector(targetClassName)

    if ($targetEl) {
      const $isTargetEl = e.target.closest(targetClassName)

      if (!$isTargetEl) {
        $targetEl.classList.remove('_opened')
      }
    }
  }

  removeOpenedClass('.dd-search-wrapp')
  removeOpenedClass('.dd-lang')

  // search close
  const searchWrapp = document.querySelector('.dd-search-wrapp')
  if (searchWrapp && !searchWrapp.classList.contains('_opened')) {
    document.body.classList.remove('search_opened')
  }
}
