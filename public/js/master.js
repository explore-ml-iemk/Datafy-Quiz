(($) => {
  $('input[name="answer"]:checked')
    .parent()
    .parent()
    .css('background-color', '#6610f2 !important');
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
    $('.summernote').summernote();
  });
})(jQuery);

$(document).ready(function () {
  // const answer = $('#answer').get(0),
  //   optList = $('#option-list').get(0);
  // let ohtml = '',
  //   olhtml = '',
  //   n = $('#nopt').value;

  // for (let i = 0; i < n; i++) {
  //   olhtml += `<div class="form-group">
  //   <label for="option[${i}]">Option${i + 1}</label>
  //   <textarea class="summernote" name="option[${i}]" rows="5" placeholder="Option${
  //     i + 1
  //   }"></textarea></div>`;
  //   ohtml = ohtml + `<option value="${i + 1}">${i + 1}</option>`;
  // }
  // optList.innerHTML = olhtml;
  // answer.innerHTML = ohtml;

  $('.summernote').summernote();
});
