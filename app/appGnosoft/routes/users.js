var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('bals');
});

/* GET users sign in */
router.get('/signin', function(req, res, next) {
  res.render('signIn.hbs');
});

/* GET users sign up */
router.get('/signup', function(req, res, next) {
  res.send('bals2');
});

module.exports = router;
