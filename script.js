const postText = document.getElementById("postText");
const postButton = document.getElementById("postButton");
const posts = document.getElementById("posts");
const counter = document.getElementById("counter");

// Character counter
postText.addEventListener("input", function () {
    counter.textContent = postText.value.length + "/200";
});

// Create a post
postButton.addEventListener("click", function () {

    const text = postText.value.trim();

    if (text === "") {
        alert("Please write something!");
        return;
    }

    // Create post container
    const post = document.createElement("div");
    post.classList.add("post");

    // Post content
    const content = document.createElement("p");
    content.textContent = text;

    // Time
    const time = document.createElement("div");
    time.classList.add("post-info");
    time.textContent = "Just now";

    // Actions
    const actions = document.createElement("div");
    actions.classList.add("actions");

    // Like button
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "❤️ 0";

    let likes = 0;

    likeButton.addEventListener("click", function () {
        likes++;

        if (likes % 2 === 1) {
            likeButton.textContent = "❤️ " + likes;
        } else {
            likeButton.textContent = "♡ " + likes;
        }
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
        post.remove();
    });

    // Add buttons
    actions.appendChild(likeButton);
    actions.appendChild(deleteButton);

    // Add everything to post
    post.appendChild(content);
    post.appendChild(time);
    post.appendChild(actions);

    // Add post to top
    posts.prepend(post);

    // Clear textarea
    postText.value = "";
    counter.textContent = "0/200";
});