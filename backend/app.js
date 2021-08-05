const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Signup = require("./routes/SignUp")
const db =mongoose
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