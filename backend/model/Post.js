const mongoose = require('mongoose')
const PostSchema = mongoose.Schema({
    username: String,
    title: String,
    description: String,

})
module.exports = mongoose.model('Posts', PostSchema)