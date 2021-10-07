const mongoose = require('mongoose')
const userData = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profileimage: String,
    freinds: Array,
    post: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
    ],
    birthdate: Date,
    gender: String,
    school: String,
    location: String,
    hobbies: Array,
    bio: String
})

module.exports = mongoose.model('userdetail', userData)
