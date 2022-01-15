// Require express package and start server
const express = require("express");
const server = express();

// Require uuid package
const { v4: uuidv4 } = require("uuid");
// console.log(uuidv4());

// Set path for static files
const staticHandler = express.static("public");
server.use(staticHandler);

// Require posts
const posts = require("./posts");


// home page
server.get("/", (req, res) => {

  let allPosts = ``;

  for (const [postID, postObj] of posts) {
    allPosts += 
    `<li class="post" id="${postID}">

      <div class="post__header">
      
        <img class="post__avatar" src="" alt="User avatar">

        <h2 class="post__user">${postObj.user}</h2><span class="post__time">${postObj.time}</span>

        <form class="post__delete-form" action="/delete-post" method="POST">

          <button class="post__delete-btn" type="submit" name="deletePost" value=${postID} aria-label="Click this button to delete this post" >🗑</button>

        </form>

      </div>
 
      <p class="post__message">${postObj.message}</p>

    </li>`
  }

  let html = 
  `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles.css">
    <title>Moonlighter</title>
  </head>
  <body>

  <h1>hello</h1>
  <ul>${allPosts}</ul>
    
  </body>
  </html>
  `
  res.send(html);
})
















const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));