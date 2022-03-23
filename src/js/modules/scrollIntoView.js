export const scrollIntoView = ($selector) => {
  const $links = document.querySelectorAll($selector)

  $links.forEach(($link) => {
    const hrefAttr = $link.getAttribute('href')

    if (hrefAttr.startsWith('#') && hrefAttr.length > 1) {
      $link.addEventListener('click', (e) => {
        e.preventDefault()

        const $target = document.querySelector(hrefAttr)
        if ($target) {
          $target.scrollIntoView({
            behavior: 'smooth',
          })
        }
      })
    }
  })
}
