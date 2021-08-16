const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 8080
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Signup = require("./routes/SignUp")
const Signupdetails = require('./model/SignUp')
const cors = require('cors')
app.use(cors())
const ngrok = require('ngrok');

const userdetails = require('./model/UserDetail')
const crypto = require('crypto')
var key = "password"
var algo = 'aes256'

const db = mongoose
// middelware

// import routs

const postRoute = require('./routes/Posts')
const Post = require('./model/Post');
const { route } = require('./routes/SignUp');
const UserDetail = require('./model/UserDetail');

app.use('/posts', postRoute)
app.use('/signup', Signup)
app.use('/', postRoute)
app.get('/:email', async (req, res) => {
  try {
    const signup = await Signupdetails.find({ email: req.params.email });
    res.json(signup[0])
  } catch (err) {
    res.json({ message: err })
  }
});
app.put("/:email", function (req, res) {

  Signupdetails.updateOne(
    { email: req.params.email },
    {
      $set: {
        bio: req.body.body, 
      },
    }
  ).then((result) => {
    res.json(result);
  });
});
app.get('/:id', async (req, res) => {
  try {
    const signup = await Signupdetails.find({_id:req.params.id});
    res.json(signup[0])
  } catch (err) {
    res.json(err)
  }
});
// app.put('/:email',(req, res) => {
  
    // const signup =Signupdetails.find({ email: req.params.email });
    // console.log( req.body)
    // signup.tree.freind.push(req.body)
    // console.log(req.body)
    // signup.email.insert(res.json(req.body))
    // res.json(req.body)
//     Signupdetails.updateOne(()=>{

//       $set: {
//         posts: req.body
//       }
//     }, 
//     )
  
// });
//Update API
app.put("/:email", function (req, res) {
  Signupdetails.updateOne(
    { email: req.params.email },
    {
      $push: {
        posts: req.body,
        
      },
    }
  ).then((result) => {
    res.json(result);
  });
});


// Routes
app.get('/', (req, res) => {

})

app.post('/login', (req, res) => {
  var cipher = crypto.createCipher(algo, key);
  var encrypted = cipher.update(req.body.password, 'utf8', 'hex')
    + cipher.final('hex')


  const userdata = new userdetails({

    username: req.body.username,
    email: req.body.email,
    password: encrypted,
    profileimage: req.body.profileimage,
    freinds: [],
    // freinds:['EFSEFS',"fSEFESFESFSEFF"],
    post: req.body.post,
    birthdate: req.body.birthdate,
    gender: req.body.gender,
    school: req.body.school,
    location: req.body.location,
    hobbies: req.body.hobbies,
    bio: req.body.bio,
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
app.put('/:id', (req, res) => {
  Post.updateOne({ _id: req.body.id }, {
    $set: {
      title: req.body.title
    }
  })
})



// connect to db 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

  console.log("connected to db")
})
app.listen(port)
