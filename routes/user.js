const router = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('users')

router.get('/', (req, res) => {
    User.find().then(user => {
        res.render('user/index', {user: user});
    })
});

module.exports = router;