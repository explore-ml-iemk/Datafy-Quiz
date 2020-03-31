const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./index/quiz');
});

router.get('/add', (req, res) => {
  res.render('./index/quiz');
});
router.get('/edit', (req, res) => {
  res.render('./index/quiz');
});
router.get('/delete', (req, res) => {
  res.render('./index/quiz');
});

module.exports = router;
