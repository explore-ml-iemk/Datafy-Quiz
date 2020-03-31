const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/auth', (req, res) => {
  res.render('main');
});

module.exports = router;
