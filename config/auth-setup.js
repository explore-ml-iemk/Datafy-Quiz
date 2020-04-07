const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "kajskas",
    clientSecret: "GOOGLE_CLIENT_SECRET",
    callbackURL: "/auth/google/redirect",
  },
  // passport callback function
  () => {}
));