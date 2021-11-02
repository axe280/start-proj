const viewPortHeightBlock = document.createElement('div')
viewPortHeightBlock.className = 'js--viewport-block' // 100vh css
document.body.prepend(viewPortHeightBlock)

export const setDiffViewportVariable = () => {
  const viewportHeightDiff =
    viewPortHeightBlock.clientHeight - window.innerHeight

  document.body.style.setProperty(
    '--viewport-height-diff',
    `${viewportHeightDiff}px`
  )
}
