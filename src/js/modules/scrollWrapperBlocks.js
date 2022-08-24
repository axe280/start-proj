export const scrollWrapperBlocks = (selectors) => {
  document.querySelectorAll(selectors).forEach(($el) => {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('scroll-wrapper');

    $el.before($wrapper);
    $wrapper.append($el);
  });
};
