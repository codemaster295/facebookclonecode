const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 8080
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Signupdetails = require('../model/SignUp')
const Post = require("../model/Post")
const router = express.Router();
module.exports = router;




router.get("/posts/:email", async (req, res) => {

    const User = await Signupdetails.findOne({ email: req.params.email });
    // console.log(User[0].posts)
  
    // console.log(User.posts)
    if(User.posts){

        const postData = await Post.find().where('_id').in(User.posts).exec((err, records) => {
            res.json(records)
            console.log(records)
        });
        console.log(User , "UserUserUserUserUser")
        for (let i = 0; i <= User[0].posts.length; i++) {
            postdata =await postData.find({ _id: User[0].posts[i] })
            // dataArr.push(postdata[i])
            console.log(postdata[i] , "postdata[i]postdata[i]")
      
          }
        console.log(dataArr)
      
        res.json(dataArr)
        console.log(dataArr)
    }
  })
  router.post("/createpost/:email", async (req, res) => {

    let User = null;
    const Post = new post({
      title: req.body.title,
      description: req.body.description,
      username: req.body.username,
      like: req.body.like
  
    })
    await Post.save().then(async (data) => {
      await Signupdetails.findOne({ email: req.params.email }).then((xc) => {
        console.log(xc)
        User = xc
      })
      // console.log(User)
      await User.posts.push(Post)
      await User.save()
      // console.log(User)
      console.log("hit")
  
    })
  })