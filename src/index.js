const express = require('express');
const path =require('path')
const app=express();
const session=require('express-session');
const flash =require('connect-flash');

//settings
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


//midlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:'musecretkey_lara'
}))
app.use(flash())

//routes
app.use(require('./routes/index'))

app.listen(3000);
console.log('server on port ',3000);