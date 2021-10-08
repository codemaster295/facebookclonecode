const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const signUpSchema = mongoose.Schema({
   firstname: String,
   lastname: String,
   email: {
      type: String,
   },
   password: String,
   posts: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
   ],
   freinds:[
      {type: mongoose.Schema.Types.ObjectId, ref: 'Signupdetails' }
   ],
   bio: String,
   birthdate:Date,
   gender:String,
})
// signUpSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Signupdetails', signUpSchema)
