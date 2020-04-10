const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { ensureAdmin } = require('../helpers/auth');

router.get('/', ensureAdmin, (req, res) => {
  User.find().then((users) => {
    res.render('user/index', { users: users });
  });
});

router.put('/admin/:id', ensureAdmin, (req, res) => {
  User.findOne({ _id: req.params.id }).then((suser) => {
    if (suser.status == 'admin') {
      suser.status = 'user';
    } else {
      suser.status = 'admin';
    }

    suser.save().then(() => {
      res.redirect('/user');
    });
  });
});

module.exports = router;
