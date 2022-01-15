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
const addUser = require("./handlers/addUser");
const renderPage = require("./handlers/renderPage");
const renderPosts = require("./handlers/renderPosts");


// HOME PAGE //
server.get("/", (req, res) => {
  res.send(renderPage(renderPosts(posts)));
})

// ADD USER //
server.post("/add-post", bodyParser, addUser);

// DELETE USER //













const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));