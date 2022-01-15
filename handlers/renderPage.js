'strict'

const renderPage = (allPosts) => {

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

    <div class="app-wrapper center width-md stack-md">

      <form class="post-add-form stack-sm" action="/add-post" method="POST">
      
        <label for="user">Name</label>
        <input type="text" name="user" id="user" class="user" required>

        <label for="message">Message</label>
        <textarea rows="5" cols="30" name="message" class="message"></textarea>

        <button type="submit" class="btn post__submit-btn"> ⤴🌔</button>

      </form>

      <ul class="posts-list">${allPosts}</ul>
      
    </div>

  </body>
  </html>
  `

  return html;
}

module.exports = renderPage;