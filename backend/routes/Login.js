const express = require('express')
const app = express()
const router = express.Router();
module.exports = router;
const loginData = require('../model/SignUp')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv/config')


//........Login ........//
router.post("/", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
  
      const UserData = await loginData.findOne({ email });
      console.log(UserData);
      if (UserData && (await bcrypt.compare(password, UserData.password))) {
        // Create token
        const token = jwt.sign({ user_id: UserData._id, email }, process.env.JWT_KEY);
  
        UserData.token = token;
  
        res.status(200).json({token:token});
      }
      res.status(401).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
  });
  
  