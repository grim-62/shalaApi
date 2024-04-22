require('dotenv').config({
    path:'./.env'
});
const express = require('express');
const app = express();

require('./models/db').connectDB();

const logger = require('morgan');
const expressSession = require('express-session');
const cookieparser = require('cookie-parser');
const ErrorHendler = require('./utils/ErrorHendler');
const { generatedErrors } = require('./middlewares/errors');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload')

app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:process.env.EXPRESS_SESSION_SECRET
}))
app.use(fileupload())
app.use(cookieParser())
app.use(logger('tiny'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/user',require('./routers/indexRouter'))
app.use('/resume',require('./routers/resumeRouter'))
app.use('/employe',require('./routers/employeRouter'))

app.all('*',(req,res,next)=>{
    next( new ErrorHendler(`Request Url Not Found ${req.url}`, 404 ))
})
app.use(generatedErrors);

app.listen(
    process.env.PORT,
    console.log(`app is running on port ${process.env.PORT}`)
);