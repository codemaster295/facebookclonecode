const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const router = express.Router();
const Signupdetails = require("../model/SignUp");
const nodemailer = require("nodemailer");
module.exports = router;
const crypto = require("crypto");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const jwt = require("jsonwebtoken");
const OtpModel = require('../model/Otp')
const jwtKey = "jwt";
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service : 'Gmail',
  
  auth: {
    user: 'mmo.globaliasoft@gmail.com',
    pass: '$#Thhso84Htdf',
  }
  
});
router.get("/facebookuser", async (req, res) => {
  try {
    const signup = await Signupdetails.find();
    res.json(signup);
  } catch (err) {
    res.json({ message: err });
  }
});
//......SignUP.......//

router.post("/", async (req, res) => {
  var otp = Math.floor((Math.random() * 10000) + 100)
  const isUserRegisters = await Signupdetails.findOne({ email: req.body.email })
  // if (isUserRegisters) {
  //   res.status(400).send("Email is already registerd")
  // }
  // else if (!req.body.email) {
  //   res.status(400).send("please provide email")
  // }
  // else if (!isUserRegisters) {

    const signup = new Signupdetails({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      freinds: req.body.freinds,
      posts: req.body.posts,
      password: bcrypt.hashSync(req.body.password, 10),
      birthdate: req.body.birthdate,
      gender: req.body.gender,
      bio: "",
    });
    const token = jwt.sign({ email: signup.email, password: signup.password }, process.env.JWT_KEY)
    console.log(token, "token");
    signup.save().then((result) => {
      console.log(result);
      res.status(200).send("true")
      // res.json({ result, token });
    });
    let OTP = await new OtpModel({
      _id: signup._id,
      otp: otp,
    }).save().then(() => {
      var mailOptions={
        to: req.body.email,
       subject: "OTP for the facebook registration",
       html: "<h3>OTP for account verification is </h3>"  + "<h1 style='font-weight:bold;'>" + otp +"</h1>" // html body
     };
     
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('otp');
    });
    });
  // }
});
router.post("/verifyotp" , async(req,res)=>{
  let dataUser = await Signupdetails.findOne({email:req.body.email})
  console.log(req.body)
  let otpNumber = await OtpModel.findOne({_id:dataUser._id})
  if(req.body.tokenOTP ==otpNumber.otp){
    res.status(200).send("true")
    let otpNumber = await OtpModel.findOneAndRemove({_id:dataUser._id})
  }
  else{
    res.status(400).send("invalid otp")
  }
})

