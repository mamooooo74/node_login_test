const express = require('express');
const app = express();
const router = require('./routes/index')
const passport = require('./app/utils/passport');
const session = require('express-session');
const flash = require('connect-flash');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: 'YOUR-SECRET-STRING',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`server start http://localhost:${PORT}`)
});

app.set('view engine', 'ejs');
app.use('/',router)








