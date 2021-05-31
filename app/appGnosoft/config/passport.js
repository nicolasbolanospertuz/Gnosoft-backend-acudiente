const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Acudiente = require('../models/acudiente')

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const acudiente = await Acudiente.findOne({email: email});
    if(!user){
        return done(null, false, {message: 'Not user found'});
    }
    else {
        const match = await Acudiente.matchPassword(password);
        if(match){
            return done(null, user);
        }
        else {
            return done(null, false, {message: 'Incorrect Password'});
        }
    }

}));

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done) =>{
    Acudiente.findById(id, (err, user) => {
        done(err, user);
    });
})