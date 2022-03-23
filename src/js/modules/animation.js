export const initAnimationScroll = () => {
  const $targets = document.querySelectorAll('.animation-trigger')

  const options = {
    threshold: 0,
    rootMargin: '-200px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const $el = entry.target
        $el.classList.add('animated')
        observer.unobserve($el)
      }
    })
  }, options)

  $targets.forEach(($target) => {
    observer.observe($target)
  })
}
