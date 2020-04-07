const moment = require('moment');

module.exports = {
  equality: function (a, b) {
    return a === b;
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
    return toString(a.length);
  },
};
