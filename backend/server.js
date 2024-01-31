const express = require('express');
const app = express();
const path = require('path');
const knexoption = require('./knexfile');
const knex = require('knex')(knexoption);
const router = require('./routes/router');
const logger = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const file = require('express-fileupload');
const sessionStore = require('express-mysql-session')(session);


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'resources/views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(file());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'n8njy5j',
    store: new sessionStore({
       ...knexoption.connection
    })
}));

app.use(flash());
app.use('*',(request,response,next)=>{
    app.locals.adminname = request.session.adminname;
    app.locals.adminid = request.session.adminid;
    app.locals.adminimage = request.session.adminimage;
    next();
});


app.use('/', router);
const PORT = process.env.PORT || 7000;
app.listen(PORT,()=>{console.log('Server Started @\nhttp://localhost:'+PORT);});
