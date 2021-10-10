const express = require('express');
const app = express()
const router = express.Router();
const jwt = require("jsonwebtoken")
module.exports = router;
const User = require('../model/UserData')


router.get("/getalluser", async (req, res) => {
    var token = req.headers['x-access-token'];
    const auth = await jwt.verify(token, process.env.JWT_KEY, (err, varifiedJwt) => {
        if (err) {
            res.send(err)
        }
        else {
            // res.send(varifiedJwt)
            // const userdata = {
            //     name:user.firstname,
            //     userid:user._id
            // }
              const senduserdata = User.find({}, {_id:0}).then((data)=>{
              
                res.status(200).send(data)
               
                })
           
        }
    })

    console.log(auth)
})