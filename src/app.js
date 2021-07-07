const app = require('express')();
const path = require('path');
const consign = require('consign');
const knex = require('knex');
const knexfile = require('../knexfile');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const {google} = require("googleapis"); 
const OAuth2 = google.auth.OAuth2;


app.db = knex(knexfile.test);
app.mail = nodemailer;
app.hbs = hbs;
app.oAuth2 = OAuth2;


consign({cwd: 'src', verbose:false})
.include('./config/passport.js')
.then('./config/middlewares.js')
.then('./services')
.then('./routes')
.then('./config/router.js')
.then('util.js')
.into(app);

app.get('/', (req,res) => {
    res.status(200).send();
});


app.use((err,req,res,next) =>{
    const {name,message,stack} = err;
    if(name === 'ValidacaoErro') res.status(400).json({error: message});
    else res.status(500).json({name,message,stack});
    next();
});



module.exports = app;