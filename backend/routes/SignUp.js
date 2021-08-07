const express = require('express');
const app = express()
const router = express.Router();
const Signupdetails =require('../model/SignUp')
module.exports = router;
const crypto =require('crypto')
var key = "password"
var algo = 'aes256'
const bodyParser = require('body-parser')
const encoder = bodyParser.urlencoded()
const jwt = require('jsonwebtoken')
const jwtKey="jwt"
router.get('/', async (req, res) => {
    try {
      const signup = await Signupdetails.find();
      res.json(signup)
    } catch (err) {
      res.json({ message: err })
    }
  });
  router.post('/', encoder , (req, res) => {
    var cipher = crypto.createCipher(algo,key);
    var encrypted =cipher.update(req.body.password , 'utf8' , 'hex')
    +cipher.final('hex')
    const signup = new Signupdetails({
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      password:encrypted,
      day:req.body.day,
      month:req.body.month,
      year:req.body.year,
      female:req.body.female,
      male:req.body.male,
      other:req.body.other

    });
    signup.save().then((res)=>{
      jwt.sign({res},jwtKey,{expiresIn:'300s'},(err,token)=>{
        res.json({token})
        console.log({token})
      })
      })
    // try {
  
    //   const signuppost = await signup.save();
    //   res.json(signuppost)
    //   console.log(signuppost)
    // } catch (err) {
    //   res.json({ message: err })
    // }
  

  })