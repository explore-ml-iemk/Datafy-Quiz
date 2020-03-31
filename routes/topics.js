const express = require('express');
const router = express.Router();

router.get('/topics', (req, res) => {
  res.render('./index/topics');
});

router.get('/topics/add', (req, res) => {
  res.render('./index/topics');
});

router.get('/topics/edit', (req, res) => {
  res.render('./index/topics');
});

router.get('/topics/delete', (req, res) => {
  res.render('./index/topics');
});

module.exports = router;
