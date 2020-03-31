const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./index/topics');
});

router.get('/add', (req, res) => {
  res.render('./index/topics');
});

router.get('/edit', (req, res) => {
  res.render('./index/topics');
});

router.get('/delete', (req, res) => {
  res.render('./index/topics');
});

module.exports = router;
