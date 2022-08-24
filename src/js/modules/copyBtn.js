export const initCopyBtn = () => {
  const $copyBtns = document.querySelectorAll('[data-copy-text]');

  $copyBtns.forEach(($btn) => {
    $btn.addEventListener('click', () => {
      const value = $btn.dataset.copyText;
      navigator.clipboard.writeText(value);

      $btn.parentElement.classList.add('_copied');

      setTimeout(() => {
        $btn.parentElement.classList.remove('_copied');
      }, 3000);
    });
  });
};
