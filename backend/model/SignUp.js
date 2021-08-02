const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    birthdate:Date,
    gender:String
})
module.exports = mongoose.model('Signupdetails' ,signUpSchema)
