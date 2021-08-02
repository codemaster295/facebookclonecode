const express =require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// middelware

// import routs

const postRoute =require('./routes/Posts')
app.use('/posts' , postRoute)
app.use('/signup' , postRoute)
app.use('/' , postRoute)

// Routes
app.get('/' , (req,res)=>{
res.send('we are on home')
})


app.get('/posts' , (req,res)=>{
    res.send('we are on posts')
    })



// connect to db 

mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser:true ,useUnifiedTopology: true},() =>{
    console.log("connected to db")
})
app.listen(5055)