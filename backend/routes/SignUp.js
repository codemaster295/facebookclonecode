const express = require('express');
const app = express()
const router = express.Router();
const Signupdetails = require('../model/SignUp')
const nodemailer = require("nodemailer");
module.exports = router;
const crypto = require('crypto')
var key = "password"
var algo = 'aes256'

const bodyParser = require('body-parser')
const encoder = bodyParser.urlencoded()
const jwt = require('jsonwebtoken')
const jwtKey = "jwt"
router.get('/getallpostdata', async (req, res) => {
  try {
    const signup = await Signupdetails.find();
    res.json(signup)
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/', encoder, async (req, res) => {
  var cipher = crypto.createCipher(algo, key);
  var encrypted = cipher.update(req.body.password, 'utf8', 'hex')
    + cipher.final('hex')

  // var token = Math.floor((Math.random() * 10000) + 100)
var token = null

  const signup = new Signupdetails({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    posts: req.body.posts,
    password: encrypted,
    day: req.body.day,
    month: req.body.month,
    year: req.body.year,
    female: req.body.female,
    male: req.body.male,
    other: req.body.other,
    bio: "",
  });

  signup.save().then(async (reds) => {
    token = await jwt.sign({ password: signup.password }, "abcd123")
    console.log(token)
    res.json({token:token , email:req.body.email})
  })
  // await res. send(token)
  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'mmo.globaliasoft@gmail.com',
  //     pass: '$#Thhso84Htdf'
  //   }
  // });

  // var mailOptions = {
  //   from: 'mmo.globaliasoft@gmail.com',
  //   to: req.body.email,
  //   subject: 'OTP for the varification of your Email Id in Facebook',
  //   text: `hyy user Thanks for signing up in the facebook clone here is the OTP ${token} for your login`,
  //   // html: `<h1>hey ${fname}</h1><br/> `        
  // };
  // if (token) {

  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //     }
  //   });
  // }
  // else {
  //   return
  // }




})
//......SignUP.......//
