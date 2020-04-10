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
    if (req.isAuthenticated()) {
      if (req.user.status.includes('admin')) {
        return next();
      }
    }
    res.redirect('/');
  },
  ensureSuperAdmin: function (req, res, next) {
    if (req.isAuthenticated()) {
      if (req.user.status == 'superadmin') {
        return next();
      }
    }
    res.redirect('/');
  },
};
