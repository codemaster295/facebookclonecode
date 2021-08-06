const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Signup = require("./routes/SignUp")
<<<<<<< HEAD
const userdetails = require('./model/UserDetail')
const crypto =require('crypto')
var key = "password"
var algo = 'aes256'
=======
const db =mongoose
>>>>>>> a4db89fecb6f1688b8321913cb9729b419a576a5
// middelware

// import routs

const postRoute = require('./routes/Posts')
const Post =require('./model/Post')
app.use('/posts', postRoute)
app.use('/signup', Signup)
app.use('/', postRoute)

// Routes
app.get('/', (req, res) => {
    res.send('we are on home')
})

app.post('/login' , (req,res)=>{
    var cipher = crypto.createCipher(algo,key);
    var encrypted =cipher.update(req.body.password , 'utf8' , 'hex')
    +cipher.final('hex')

   
    const userdata = new userdetails({

        username:req.body.username,
        email:req.body.email,
        password:encrypted,
        profileimage:req.body.profileimage,
        freinds:req.body.freinds,
        post:req.body.post,
        birthdate:req.body.birthdate,
        gender:req.body.gender,
        school:req.body.school,
        location:req.body.location,
        hobbies:req.body.hobbies,
        bio:req.body.bio,
    })
    userdata.save().then((result) => {
        console.warn(result);
    })
    
    
    
    res.end("hello")
    
})


app.get('/posts', (req, res) => {
    res.send('we are on posts')
})

app.delete('/:id', function (req, res) {
    Post.deleteOne({ _id: req.params.id }).then((result) => {
        res.json(result);
    }).catch(err => {
        console.warn(err);
    });
  })
  app.put('/:id',(req,res)=>{
    Post.updateOne({ _id: req.body.id },{
        $set:{
          title:req.body.title
      }
      })
  })



// connect to db 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

    console.log("connected to db")
})
app.listen(5055)