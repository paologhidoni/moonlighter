'use strict'

//  Require posts
const posts = require("../posts");

// Require uuid package
const { v4: uuidv4 } = require("uuid");

const addUser = (req, res) => {

  const today = new Date();
  const date = today.toLocaleDateString('en-GB');
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  const newName = req.body.user;
  const newMessage = req.body.message;
  
  const newPost = { 
    "user": newName, 
    "message": newMessage,
    "date": date,
    "time": time
     };

  posts.set(uuidv4(), newPost);
  res.redirect("/");


}

module.exports = addUser;

