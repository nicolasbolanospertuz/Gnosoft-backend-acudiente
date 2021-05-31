const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bals');
});

/* POST users sign in */
router.get('/signin', function(req, res, next) {
  res.render('signIn.hbs');
});

/* POST users sign up */
router.get('/register', function(req, res, next) {
  res.render('register.hbs');
});

module.exports = router;
