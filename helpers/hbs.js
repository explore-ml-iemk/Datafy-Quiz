const moment = require('moment');

module.exports = {
  equality: function (a, b) {
    return a.toString() === b.toString();
  },
  select: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      );
  },
  add: function (a, b) {
    return a + b;
  },
  length: function (a) {
    return a.length;
  },
  loop: function (from, to, step, block) {
    let accum = '';
    for (let i = from; i < to; i += step) accum += block.fn(i);
    return accum;
  },
  includes: function (a, b) {
    return a.includes(b);
  },
};
