const passport = require('../utils/passport')
const model = require('../models');
const User = model.User;
const index = (req,res) => {
    const errorMessage = req.flash('error').join('<br>');
    res.render('login',{
        errorMessage: errorMessage
      })
}
const login = passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true,
    badRequestMessage: '「メールアドレス」と「パスワード」は必須入力です。'
  });
module.exports = {index, login}