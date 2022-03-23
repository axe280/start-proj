export const initTabs = () => {
  document.addEventListener('click', onClickTab)

  function onClickTab(e) {
    const $tabsWrapp = e.target.closest('.tabs-wrapp')
    if (!$tabsWrapp) return

    const $targetEl = e.target
    const $li = $targetEl.closest('.tabs-wrapp .tabs-nav li')
    let activeIndex

    if (!$li) return

    const $boxes = $tabsWrapp.querySelector('.tabs-boxes').children
    const $lis = $tabsWrapp.querySelector('.tabs-nav').children

    if (!$boxes.length || !$lis.length) return

    Array.from($lis).forEach(($tabLi, index) => {
      if ($tabLi === $li) {
        activeIndex = index
      }

      $tabLi.classList.remove('current')
    })

    Array.from($boxes).forEach(($box) => {
      $box.classList.remove('_visible')
    })

    $li.classList.add('current')
    $boxes[activeIndex].classList.add('_visible')
  }
}
