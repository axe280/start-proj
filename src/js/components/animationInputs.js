import $ from 'jquery'

$(function () {
  $(document).on(
    {
      focus: function () {
        $(this).parents('.field-item').addClass('_focused')
      },
      blur: function () {
        if ($(this).val() === '') {
          $(this).parents('.field-item').removeClass('_focused')
        }
      },
    },
    '.field-item_animation-label input, .field-item_animation-label textarea'
  )
})
