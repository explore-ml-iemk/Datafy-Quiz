module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      return next();
    }
  },
  ensureAdmin: function (req, res, next) {
    console.log(req);
    if (req.isAuthenticated()) {
      if (req.user.status == 'admin') {
        return next();
      }
    }
    res.redirect('/');
  },
};
