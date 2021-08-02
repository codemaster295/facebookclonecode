const express = require('express');
const app = express()
const router = express.Router();
const Post = require('../model/Post')
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    username: req.body.username

  });

  try {

    const savedPost = await post.save();
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }


})


module.exports = router;