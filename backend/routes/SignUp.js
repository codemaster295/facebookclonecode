const express = require('express');
const app = express()
const router = express.Router();
const Signupdetails =require('../model/SignUp')
module.exports = router;
router.get('/', async (req, res) => {
    try {
      const signup = await Signupdetails.find();
      res.json(signup)
    } catch (err) {
      res.json({ message: err })
    }
  });
  router.post('/signup', async (req, res) => {
    const signup = new Signupdetails({
        name:req.body.fname,
        surname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        birthdate:req.body.day,
        gender:req.body.Male                                                                                                                                                                                                                                                
    });
    // signup.save().then((res)=>{
    //     res.json(res)
    //   })
    try {
  
      const signuppost = await signup.save();
      res.json(signuppost)
    } catch (err) {
      res.json({ message: err })
    }
  
  
  })