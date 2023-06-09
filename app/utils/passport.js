const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('../models');
const User = model.User;
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},(email, password, done) => {
    User.findOne({
        where: {
            email: email
        }
    })
    .then(user => {
        console.log(user)
        if(user && bcrypt.compareSync(password, user.password)){
            return done(null, user);
        }
        throw new Error();
    }).catch(error => {
        return done(null, false, { message: '認証情報と一致するレコードがありません。' });
    });
}));
passport.serializeUser((user,done) => {
    done(null, user)
});
passport.deserializeUser((user, done) => {

    done(null, user);
  
  });
module.exports = passport;