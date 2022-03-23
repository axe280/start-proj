export const initActiveNavigationSection = () => {
  const $links = document.querySelectorAll('.header-menu .menu a')
  const $anchorLinks = []

  $links.forEach(($link) => {
    const hrefAttr = $link.getAttribute('href')
    if (hrefAttr.startsWith('#') && hrefAttr.length > 1) {
      $anchorLinks.push($link)
    }
  })

  const options = {
    threshold: 0,
    rootMargin: '-50% 0px -50% 0px',
  }

  const ovserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const $anchorEl = entry.target.querySelector('.anchor-bl')
      const $activeLink = $anchorLinks.find(($link) =>
        $link.getAttribute('href').includes($anchorEl.id)
      )

      if (entry.isIntersecting) {
        $activeLink.classList.add('_active')
      } else {
        $activeLink.classList.remove('_active')
      }
    })
  }, options)

  $anchorLinks.forEach(($link) => {
    const $target = document.querySelector($link.getAttribute('href'))

    if ($target) {
      ovserver.observe($target.parentElement)
    }
  })
}
