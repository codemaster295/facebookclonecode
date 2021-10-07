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
   posts: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
  ],
  bio:String,
   password:String,
   day:String,
   month:String,
   year:String,
   female:String,
   male:String,
   other:String,
  
  



})
// signUpSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Signupdetails' ,signUpSchema)
