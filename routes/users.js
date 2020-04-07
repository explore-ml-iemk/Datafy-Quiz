const router = require('express').Router();
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.get('/logout', (req, res)=> {
    res.send('You are Logging Out');
})

router.get('/google', passport.authenticate('google', {
    scope:['profile', 'emails']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.send('you are redirecting');
})


module.exports = router;