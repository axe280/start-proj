export const changeSelectPlaceholderColor = () => {
  const $selectList = document.querySelectorAll('select');

  if ($selectList.length) {
    const controlColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--control-color');

    const changeColor = ($select) => {
      const isDisabled =
        $select[$select.selectedIndex].hasAttribute('disabled');
      if (!isDisabled) {
        $select.style.setProperty('--control-color', controlColor);
      }
    };

    $selectList.forEach(($select) => {
      changeColor($select);
      $select.addEventListener('change', () => changeColor($select));
    });
  }
};
