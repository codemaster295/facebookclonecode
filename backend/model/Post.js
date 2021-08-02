const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    username: String,
    title: {
        required:true,
        type:String
    },
    description: String,
    userImage:String

})

module.exports = mongoose.model('Posts', PostSchema)
