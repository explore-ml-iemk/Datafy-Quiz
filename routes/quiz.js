const express = require('express');
const router = express.Router();



router.get('/quiz', (req, res) => {
    res.render('quiz');
});


module.exports = router;