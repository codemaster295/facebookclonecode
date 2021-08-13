const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({

    username: String,
    title: String,
    description: String,
    userImage: String,
    like: String,
    message: String
})

module.exports = mongoose.model('Posts', PostSchema)
