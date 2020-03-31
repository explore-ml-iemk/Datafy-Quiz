const express = require('express');
const router = express.Router();

router.get('/quiz', (req, res) => {
  res.render('./index/quiz');
});

router.get('/quiz/add', (req, res) => {
  res.render('./index/quiz');
});
router.get('/quiz/edit', (req, res) => {
  res.render('./index/quiz');
});
router.get('/quiz/delete', (req, res) => {
  res.render('./index/quiz');
});

module.exports = router;
