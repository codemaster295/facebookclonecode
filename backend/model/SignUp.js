const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema({
   fname:String,
   lname:String,
   email:String,
   password:String,
   day:String,
   month:String,
   year:String,
   female:String,
   male:String,
   other:String,
   token:{
      type:Number,
      require:true
   }


})
module.exports = mongoose.model('Signupdetails' ,signUpSchema)
