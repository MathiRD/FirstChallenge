interface comment {
    id: number;
    postId: number;
    username: string;
    email: string;
    body: string;
  }

function formatComment(comment: any) {
  const formattedComment = `
        <li>
            <p>
                <span class='ID'> ID: ${comment.id + 1}</span> <span class="username"> ${comment.username}:</span> <span class="email">${comment.email}:</span> <span class="commentColor"> ${comment.body}</span></p>

            </hr>
        </li>
    `;
  return formattedComment;
}

const urlParams = new URLSearchParams(window.location.search);
const encodedPost = urlParams.get('data');
const decodedPost = decodeURIComponent(encodedPost || "");
const post = JSON.parse(decodedPost);

const postTitle = document.getElementById('post-title') as HTMLHeadingElement;
const postImage = document.getElementById('post-image') as HTMLImageElement;
const postBody = document.getElementById('post-body') as HTMLParagraphElement;
const commentsList = document.getElementById('comments-ul') as HTMLUListElement;

postTitle.textContent = post.title;
postImage.src = post.image;
postBody.textContent = post.body;

const comments: comment[] = [
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
        body: "hey man whats up?!"
    },
    {
        id: 8,
        postId: 6,
        username: "user9",
        email: "user9@example.com",
        body: "oh this is not nice man..."
    }
];


const postComments = comments.filter(function (comment) {
    return comment.postId === post.id;
  });
  
  if (postComments.length > 0) {
    const formattedComments = postComments.map(formatComment).join('');
    commentsList.innerHTML = formattedComments;
  } else {
    const li = document.createElement('li');
    li.textContent = 'No comments found';
    commentsList.appendChild(li);
  }