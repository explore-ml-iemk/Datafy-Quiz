const express = require('express');
const router = express.Router();

router.get('/topics', (req, res) => {
  res.render('./index/topics');
});

module.exports = router;
