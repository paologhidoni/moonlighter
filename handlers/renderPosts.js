'strict'

const renderPosts = (posts) => {

  let allPosts = ``;

  for (const [postID, postObj] of posts) {
    allPosts += 
    `<li class="post" id="${postID}">

      <div class="post__header">
      
        <div class="post__user--info">
        
          <img class="post__avatar" src="./avatar.png" alt="User avatar">

          <h2 class="post__user">${postObj.user}</h2><span class="post__time">${postObj.date} ${postObj.time}</span>
        
        </div>

        <form class="post-delete-form" action="/delete-post" method="POST">

          <button class="btn post__delete-btn" type="submit" name="deletePost" value=${postID} aria-label="Click this button to delete this post" >🗑</button>

        </form>

      </div>
 
      <p class="post__message">${postObj.message}</p>

    </li>`
  }

  return allPosts;
}

module.exports = renderPosts;