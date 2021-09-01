const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const signUpSchema = mongoose.Schema({
   fname:String,
   lname:String,
   email:{
      type:String,
      unique:true,
      require:true   
   },
  posts:[
     {
      title:String,
      description:String,
      username:String
     }
  ],
  bio:String,
   password:String,
   day:String,
   month:String,
   year:String,
   female:String,
   male:String,
   other:String,
   token:{
      type:Number,
      require:true,
      
   },
   profileimage:String,



})
// signUpSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Signupdetails' ,signUpSchema)
