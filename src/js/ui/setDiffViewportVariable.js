const viewPortHeightBlock = document.createElement('div');
viewPortHeightBlock.className = 'js--viewport-block'; // 100vh css
document.body.append(viewPortHeightBlock);

export const setDiffViewportVariable = () => {
  const $vBlock = document.querySelector('.js--viewport-block');
  const viewportHeightDiff = $vBlock.clientHeight - window.innerHeight;

  document.body.style.setProperty(
    '--viewport-height-diff',
    `${viewportHeightDiff}px`
  );
};
