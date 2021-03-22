import $ from 'jquery'

$(function () {
  var copytext = function (el) {
    var $tmp = $('<input>')
    $('body').append($tmp)
    $tmp.val($(el).val()).select()
    document.execCommand('copy')
    $tmp.remove()
  }

  var copyTimer = null

  $('.copy-link .btn').on('click', function () {
    copytext($(this).parent().find('.field-item__field input'))

    clearTimeout(copyTimer)

    $(this).siblings('.copied-text').fadeIn()

    copyTimer = setTimeout(() => {
      $(this).siblings('.copied-text').fadeOut()
    }, 2000)
  })
})
