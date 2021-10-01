import $ from 'jquery'

$(function () {
  if ($('.field-item._animation-label').length) {
    $(
      '.field-item._animation-label input, .field-item._animation-label textarea'
    ).each(function () {
      if ($(this).val() !== '') {
        $(this).parents('.field-item').addClass('_focused')
      }
    })

    $(document).on(
      {
        focus: function () {
          $(this).parents('.field-item').addClass('_focused')
        },
        blur: function () {
          setTimeout(() => {
            if ($(this).val() === '') {
              $(this).parents('.field-item').removeClass('_focused')
            }
          }, 0)
        },
      },
      '.field-item._animation-label input, .field-item._animation-label textarea'
    )
  }
})
