($ => {
  $('input[name="answer"]:checked')
    .parent()
    .parent()
    .css('background-color', '#6610f2 !important');
})(jQuery);
