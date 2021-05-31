const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();
require('./appGnosoft/database');

//Settings
app.set('port', process.env.PERT || 8080);
app.set('views', path.join(__dirname, 'appGnosoft/views'));
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
app.use(require('./appGnosoft/routes/index'));
app.use(require('./appGnosoft/routes/notes'));
app.use(require('./appGnosoft/routes/users'));

//StaticFiles
app.use(express.static(path.join(__dirname, 'appGnosoft/public')));

//Server is listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
})