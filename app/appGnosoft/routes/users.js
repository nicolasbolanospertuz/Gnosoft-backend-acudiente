const express = require('express');
const acudiente = require('../models/acudiente');
const router = express.Router();
require('../models/acudiente')
const passport = require('passport');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('bals');
});

/* POST users sign in */
router.post('/acudiente/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/acudiente/login',
  failureFlash: true
}));


router.get('/acudiente/login', function (req, res, next) {
  res.render('signIn.hbs');
});

/* POST users sign up */
router.get('/acudiente/register', function (req, res, next) {
  res.render('register.hbs');
});

router.post('/acudiente/register', async function (req, res, next){
  const{name,last_name,email,phone,password,confirm_password} = req.body;
  const newAcudiente = new acudiente({name,last_name,email,phone,password});
  newAcudiente.password = await newAcudiente.encryptPassword(password);
  await newAcudiente.save();
  console.log(req.body);
  res.redirect('/acudiente/login');
});

module.exports = router;
