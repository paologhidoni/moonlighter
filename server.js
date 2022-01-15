// Require express package and start server
const express = require("express");
const server = express();

// Set path for static files
const staticHandler = express.static("public");
server.use(staticHandler);

// Require posts
const posts = require("./posts");

// Body Parser
const bodyParser = express.urlencoded({ extended: false });

// Require handlers
const renderPage = require("./handlers/renderPage");
const renderPosts = require("./handlers/renderPosts");
const addPost = require("./handlers/addPost");
const deletePost = require("./handlers/delete-post");


// HOME PAGE //
server.get("/", (req, res) => {
  res.send(renderPage(renderPosts(posts)));
})

// ADD POST //
server.post("/add-post", bodyParser, addPost);

// DELETE POST //
server.post("/delete-post", bodyParser, deletePost);












const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));