const options = {
  toolbar: [
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['font', ['strikethrough', 'superscript', 'subscript']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['insert', ['link', 'picture', 'video']],
    ['view', ['fullscreen', 'codeview', 'help']],
  ],
};

(($) => {
  // Disable Right Click
  $(document).on('contextmenu', function () {
    return false;
  });

  let index = 0,
    length = $('.quizForm .quiz').length;

  $('.quizForm .quiz').addClass('d-none');
  $($('.quizForm .quiz').get(index)).removeClass('d-none');

  $('.quizForm #submit').click(function (e) {
    correct = $('.quizForm .quiz input[type="radio"]:checked.correct').length;
    $('.modal-body').get(0).innerHTML = `Your Score is ${correct} out of 5`;
  });
  $('.quizForm #prev').click(function (e) {
    if (index != 0) index--;
    $('.quizForm .quiz').addClass('d-none');
    $($('.quizForm .quiz').get(index)).removeClass('d-none');
  });
  $('.quizForm #next').click(function (e) {
    if (index != length - 1) index++;
    $('.quizForm .quiz').addClass('d-none');
    $($('.quizForm .quiz').get(index)).removeClass('d-none');
  });

  // $('input[name^="answer"]:checked')
  //   .parent()
  //   .parent()
  //   .css('background-color', '#6610f2 !important');
  $('#nopt').on('input', function (e) {
    const answer = $('#answer').get(0),
      optList = $('#option-list').get(0);
    let ohtml = '',
      olhtml = '';
    for (let i = 0; i < this.value; i++) {
      olhtml += `<div class="form-group">
    <label for="option[${i}]">Option${i + 1}</label>
    <textarea class="summernote" name="option[${i}]" rows="5"></textarea></div>`;
      ohtml = ohtml + `<option value="${i + 1}">${i + 1}</option>`;
    }
    optList.innerHTML = olhtml;
    answer.innerHTML = ohtml;
    $('.summernote').summernote(options);
  });
})(jQuery);

$(document).ready(function () {
  $('.summernote').summernote(options);
});
