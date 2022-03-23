export const initTooltip = () => {
  var $tooltips = document.querySelectorAll('.tooltip-wrapp .tooltip')

  document.onmousemove = function (e) {
    const $tooltipWrapp = e.target.closest('.tooltip-wrapp')

    if ($tooltipWrapp) {
      const x = `${e.clientX}px`
      const y = `${e.clientY + 6}px`

      for (const $tooltip of $tooltips) {
        $tooltip.style.top = y
        $tooltip.style.left = x
      }
    }
  }
}
