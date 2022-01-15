'use strict'

const posts = require("../posts");

const deletePost = (req, res) => {

  const postToDelete = req.body.postToDelete;

  posts.delete(postToDelete);

  res.redirect("/");

};

module.exports = deletePost;