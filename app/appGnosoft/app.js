var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Initializations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PERT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//GlobalVariables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//StaticFiles
app.use(express.static(path.join(__dirname, 'public')));

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})



module.exports = app;
