const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('bals');
});

/* POST users sign in */
router.get('/signin', function (req, res, next) {
  res.render('signIn.hbs');
});

/* POST users sign up */
router.get('/register', function (req, res, next) {
  res.render('register.hbs');
});

router.post('/register', function (req, res, next){
  const{name,last_name,email, pasword,confirm_password} = req.body;
  const errors =[];
  if(pasword != confirm_password){
    errors.push({text:'Pasword do not match'});

  } 
  if(pasword.length < 4 ){
    errors.push({text:' too short'});
  }
  if(errors.length > 0){
    res.render('/register',{errors,name,last_name,email,pasword,confirm_password})
  }else{
    res.send('ok')   
  }

});

module.exports = router;
