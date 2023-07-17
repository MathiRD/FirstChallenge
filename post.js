function formatComment(comment) {
    var formattedComment = "\n        <li>\n            <p>\n                <span class='ID'> ID: ".concat(comment.id + 1, "</span> <span class=\"username\"> ").concat(comment.username, ":</span> <span class=\"email\">").concat(comment.email, ":</span> <span class=\"commentColor\"> ").concat(comment.body, "</span></p>\n\n            </hr>\n        </li>\n    ");
    return formattedComment;
}
var urlParams = new URLSearchParams(window.location.search);
var encodedPost = urlParams.get('data');
var decodedPost = decodeURIComponent(encodedPost || "");
var post = JSON.parse(decodedPost);
var postTitle = document.getElementById('post-title');
var postImage = document.getElementById('post-image');
var postBody = document.getElementById('post-body');
var commentsList = document.getElementById('comments-ul');
postTitle.textContent = post.title;
postImage.src = post.image;
postBody.textContent = post.body;
var comments = [
    {
        id: 0,
        postId: 0,
        username: "user1",
        email: "user1@example.com",
        body: "Great post!"
    },
    {
        id: 1,
        postId: 1,
        username: "user2",
        email: "user2@example.com",
        body: "Great post!"
    },
    {
        id: 2,
        postId: 4,
        username: "user3",
        email: "user3@example.com",
        body: "I really enjoyed reading this."
    },
    {
        id: 3,
        postId: 5,
        username: "user4",
        email: "user4@example.com",
        body: "Great post!"
    },
    {
        id: 4,
        postId: 3,
        username: "user5",
        email: "user5@example.com",
        body: "very good!"
    },
    {
        id: 5,
        postId: 3,
        username: "user6",
        email: "user6@example.com",
        body: "well played!"
    },
    {
        id: 6,
        postId: 2,
        username: "user7",
        email: "user7@example.com",
        body: "lets do it!"
    },
    {
        id: 7,
        postId: 1,
        username: "user8",
        email: "user8@example.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 8,
        postId: 6,
        username: "user9",
        email: "user9@example.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];
var postComments = comments.filter(function (comment) {
    return comment.postId === post.id;
});
if (postComments.length > 0) {
    var formattedComments = postComments.map(formatComment).join('');
    commentsList.innerHTML = formattedComments;
}
else {
    var li = document.createElement('li');
    li.textContent = 'No comments found';
    commentsList.appendChild(li);
}
