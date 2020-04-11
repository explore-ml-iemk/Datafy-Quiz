const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Story = mongoose.model('stories');
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');

router.get('/', ensureGuest, (req, res) => {
  res.render('./index/welcome');
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('index/dashboard');
});

module.exports = router;
