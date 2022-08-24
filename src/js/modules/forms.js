import IMask from 'imask';

export const initForms = () => {
  const $phoneInputs = document.querySelectorAll('input[type=tel]');

  $phoneInputs.forEach(($el) => {
    const patternMask = IMask($el, {
      mask: '+{38\\0} (00) 000 00 00',
      lazy: true,
      placeholderChar: '_',
    });

    $el.addEventListener('focus', function () {
      patternMask.updateOptions({ lazy: false });
    });

    $el.addEventListener('blur', function () {
      patternMask.updateOptions({ lazy: true });
      if (!patternMask.masked.rawInputValue) {
        patternMask.value = '';
      }
    });
  });

  const $feedbackForms = document.querySelectorAll('.feedback-form');

  $feedbackForms.forEach(($form) => {
    $form.addEventListener('submit', (e) => {
      e.preventDefault();

      renderThanksForm($form);

      // fetch('url', {
      //   method: 'post',
      //   body: new FormData($form),
      // })
      //   .then((res) => {
      //     if (res.ok) {
      //       renderThanksForm($form)
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    });
  });

  const renderThanksForm = ($form) => {
    const $modalInnerWrapper = $form.closest('.modal-inner-wrapper');

    if ($modalInnerWrapper) {
      const template = `
        <header class="modal-head">
          <div class="heading _h1">Спасибо!</div>
        </header>
        <div class="modal-body">
          <p>Ваше сообщение отправлено и в ближайшее время наши специалисты обработают его и ответят Вам.</p>
        </div>
      `;
      $modalInnerWrapper.innerHTML = template;
    } else {
      const template = `
        <div class="thanks-template">
          <div class="heading _h1 mb-10">Спасибо!</div>
          <p>Ваше сообщение отправлено и в ближайшее время наши специалисты обработают его и ответят Вам.</p>
        </div>
      `;
      $form.insertAdjacentHTML('beforebegin', template);
      $form.remove();
    }
  };
};
